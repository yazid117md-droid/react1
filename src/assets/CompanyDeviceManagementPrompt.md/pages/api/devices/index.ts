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

  try {
    await dbConnect();

    switch (req.method) {
      case 'GET':
        return handleGet(req, res);
      case 'POST':
        return handlePost(req, res);
      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleGet(req: AuthenticatedRequest, res: NextApiResponse) {
  const { page = 1, limit = 10, search = '', deviceType = '', mdmRegistered = '', adLinked = '' } = req.query;

  const query: any = {};

  if (search) {
    query.$or = [
      { employeeName: { $regex: search, $options: 'i' } },
      { deviceId: { $regex: search, $options: 'i' } },
      { operatingSystem: { $regex: search, $options: 'i' } },
    ];
  }

  if (deviceType) {
    query.deviceType = deviceType;
  }

  if (mdmRegistered !== '') {
    query.mdmIntuneRegistered = mdmRegistered === 'true';
  }

  if (adLinked !== '') {
    query.activeDirectoryLinked = adLinked === 'true';
  }

  const skip = (Number(page) - 1) * Number(limit);

  const [devices, total] = await Promise.all([
    Device.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit)),
    Device.countDocuments(query),
  ]);

  res.status(200).json({
    devices,
    pagination: {
      current: Number(page),
      pages: Math.ceil(total / Number(limit)),
      total,
    },
  });
}

async function handlePost(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }

  const deviceData = req.body;

  // Check if device ID already exists
  const existingDevice = await Device.findOne({ deviceId: deviceData.deviceId });
  if (existingDevice) {
    return res.status(400).json({ message: 'Device ID already exists' });
  }

  const device = new Device(deviceData);
  await device.save();

  res.status(201).json({
    message: 'Device created successfully',
    device,
  });
}
