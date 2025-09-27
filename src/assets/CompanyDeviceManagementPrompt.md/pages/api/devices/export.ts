import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';
import Device from '../../models/Device';
import jwt from 'jsonwebtoken';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { format = 'excel', search = '', deviceType = '', mdmRegistered = '', adLinked = '' } = req.query;

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

    const devices = await Device.find(query).sort({ createdAt: -1 });

    if (format === 'pdf') {
      return exportToPDF(res, devices);
    } else {
      return exportToExcel(res, devices);
    }
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function exportToPDF(res: NextApiResponse, devices: any[]) {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text('Company Device Management Report', 14, 22);
  
  // Add date
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

  // Prepare table data
  const tableData = devices.map(device => [
    device.employeeName,
    device.deviceId,
    device.deviceType,
    device.operatingSystem,
    device.mdmIntuneRegistered ? 'Yes' : 'No',
    device.activeDirectoryLinked ? 'Yes' : 'No',
    new Date(device.registrationDate).toLocaleDateString(),
    device.additionalNotes || '-'
  ]);

  // Add table
  (doc as any).autoTable({
    head: [['Employee', 'Device ID', 'Type', 'OS', 'MDM/Intune', 'AD Linked', 'Registration Date', 'Notes']],
    body: tableData,
    startY: 40,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [66, 139, 202] },
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=device-report.pdf');
  res.send(doc.output('arraybuffer'));
}

function exportToExcel(res: NextApiResponse, devices: any[]) {
  const worksheet = XLSX.utils.json_to_sheet(
    devices.map(device => ({
      'Employee Name': device.employeeName,
      'Device ID': device.deviceId,
      'Device Type': device.deviceType,
      'Operating System': device.operatingSystem,
      'MDM/Intune Registered': device.mdmIntuneRegistered ? 'Yes' : 'No',
      'Active Directory Linked': device.activeDirectoryLinked ? 'Yes' : 'No',
      'Registration Date': new Date(device.registrationDate).toLocaleDateString(),
      'Additional Notes': device.additionalNotes || '',
      'Created At': new Date(device.createdAt).toLocaleDateString(),
    }))
  );

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Devices');

  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=device-report.xlsx');
  res.send(buffer);
}
