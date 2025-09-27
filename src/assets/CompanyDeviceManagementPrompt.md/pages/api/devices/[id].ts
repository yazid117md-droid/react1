import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';
import Device from '../../models/Device';
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

  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'Device ID is required' });
  }

  try {
    await dbConnect();

    switch (req.method) {
      case 'GET':
        return handleGet(req, res, id);
      case 'PUT':
        return handlePut(req, res, id);
      case 'DELETE':
        return handleDelete(req, res, id);
      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleGet(req: AuthenticatedRequest, res: NextApiResponse, id: string) {
  const device = await Device.findById(id);
  
  if (!device) {
    return res.status(404).json({ message: 'Device not found' });
  }

  res.status(200).json({ device });
}

async function handlePut(req: AuthenticatedRequest, res: NextApiResponse, id: string) {
  if (req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }

  const deviceData = req.body;

  // Check if device ID is being changed and if it already exists
  if (deviceData.deviceId) {
    const existingDevice = await Device.findOne({ 
      deviceId: deviceData.deviceId,
      _id: { $ne: id }
    });
    if (existingDevice) {
      return res.status(400).json({ message: 'Device ID already exists' });
    }
  }

  const device = await Device.findByIdAndUpdate(
    id,
    deviceData,
    { new: true, runValidators: true }
  );

  if (!device) {
    return res.status(404).json({ message: 'Device not found' });
  }

  res.status(200).json({
    message: 'Device updated successfully',
    device,
  });
}

async function handleDelete(req: AuthenticatedRequest, res: NextApiResponse, id: string) {
  if (req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }

  const device = await Device.findByIdAndDelete(id);

  if (!device) {
    return res.status(404).json({ message: 'Device not found' });
  }

  res.status(200).json({ message: 'Device deleted successfully' });
}
