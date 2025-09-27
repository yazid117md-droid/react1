import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';
import User from '../../models/User';
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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { email, newRole = 'Admin' } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { role: newRole },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: `User role updated to ${newRole}`,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Promote error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
