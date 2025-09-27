import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';
import Device from '../../models/Device';
import { getMicrosoftGraphService } from '../../lib/microsoft-graph';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    userId: string;
    email: string;
    role: string;
  };
}

function authenticateToken(req: AuthenticatedRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as any;
    req.user = decoded;
    return null;
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}

export default async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  const authError = authenticateToken(req, res);
  if (authError) return authError;

  if (req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const graphService = await getMicrosoftGraphService();
    const syncedDevices = await graphService.syncDeviceData();

    const results = {
      synced: 0,
      updated: 0,
      errors: 0,
      devices: [] as any[],
    };

    for (const device of syncedDevices) {
      try {
        const deviceData = {
          employeeName: device.user?.displayName || 'Unknown',
          deviceId: device.deviceId || device.id,
          deviceType: mapDeviceType(device.deviceType),
          operatingSystem: device.operatingSystem || 'Unknown',
          mdmIntuneRegistered: device.source === 'Intune',
          activeDirectoryLinked: device.source === 'Active Directory',
          registrationDate: new Date(device.createdDateTime || Date.now()),
          additionalNotes: `Synced from ${device.source} - ${device.manufacturer || ''} ${device.model || ''}`.trim(),
        };

        const existingDevice = await Device.findOne({ deviceId: deviceData.deviceId });
        
        if (existingDevice) {
          await Device.findByIdAndUpdate(existingDevice._id, deviceData);
          results.updated++;
        } else {
          const newDevice = new Device(deviceData);
          await newDevice.save();
          results.synced++;
        }

        results.devices.push(deviceData);
      } catch (error) {
        console.error('Error processing device:', error);
        results.errors++;
      }
    }

    res.status(200).json({
      message: 'Sync completed',
      results,
    });
  } catch (error) {
    console.error('Sync error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function mapDeviceType(deviceType: string): 'Laptop' | 'PC' | 'Mobile' | 'Tablet' | 'Other' {
  const type = deviceType?.toLowerCase() || '';
  
  if (type.includes('laptop') || type.includes('notebook')) return 'Laptop';
  if (type.includes('desktop') || type.includes('pc')) return 'PC';
  if (type.includes('mobile') || type.includes('phone')) return 'Mobile';
  if (type.includes('tablet') || type.includes('ipad')) return 'Tablet';
  
  return 'Other';
}
