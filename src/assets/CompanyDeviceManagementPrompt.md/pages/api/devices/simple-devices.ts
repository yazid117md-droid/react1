import { NextApiRequest, NextApiResponse } from 'next';

// Simple in-memory storage for demo
let devices = [
  {
    _id: '1',
    employeeName: 'أحمد محمد',
    deviceId: 'LAPTOP-001',
    deviceType: 'Laptop',
    operatingSystem: 'Windows 11',
    mdmIntuneRegistered: true,
    activeDirectoryLinked: true,
    registrationDate: '2024-01-15',
    additionalNotes: 'جهاز جديد للعمل',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '2',
    employeeName: 'فاطمة علي',
    deviceId: 'PC-002',
    deviceType: 'PC',
    operatingSystem: 'Windows 10',
    mdmIntuneRegistered: false,
    activeDirectoryLinked: true,
    registrationDate: '2024-02-20',
    additionalNotes: 'جهاز مكتبي',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '3',
    employeeName: 'محمد السعيد',
    deviceId: 'MOBILE-003',
    deviceType: 'Mobile',
    operatingSystem: 'iOS 17',
    mdmIntuneRegistered: true,
    activeDirectoryLinked: false,
    registrationDate: '2024-03-10',
    additionalNotes: 'هاتف ذكي للعمل',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { search = '', deviceType = '', mdmRegistered = '', adLinked = '' } = req.query;

  let filteredDevices = [...devices];

  // Apply search filter
  if (search) {
    const searchLower = search.toString().toLowerCase();
    filteredDevices = filteredDevices.filter(device => 
      device.employeeName.toLowerCase().includes(searchLower) ||
      device.deviceId.toLowerCase().includes(searchLower) ||
      device.operatingSystem.toLowerCase().includes(searchLower)
    );
  }

  // Apply device type filter
  if (deviceType) {
    filteredDevices = filteredDevices.filter(device => device.deviceType === deviceType);
  }

  // Apply MDM filter
  if (mdmRegistered !== '') {
    filteredDevices = filteredDevices.filter(device => device.mdmIntuneRegistered === (mdmRegistered === 'true'));
  }

  // Apply AD filter
  if (adLinked !== '') {
    filteredDevices = filteredDevices.filter(device => device.activeDirectoryLinked === (adLinked === 'true'));
  }

  res.status(200).json({
    devices: filteredDevices,
    pagination: {
      current: 1,
      pages: 1,
      total: filteredDevices.length,
    },
  });
}

async function handlePost(req: AuthenticatedRequest, res: NextApiResponse) {
  const deviceData = req.body;

  const newDevice = {
    _id: (devices.length + 1).toString(),
    ...deviceData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  devices.push(newDevice);

  res.status(201).json({
    message: 'Device created successfully',
    device: newDevice,
  });
}
