import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

// Simple in-memory storage for demo
const users = [
  {
    id: '1',
    email: 'admin@company.com',
    password: '123456', // In real app, this would be hashed
    name: 'Admin User',
    role: 'Admin'
  },
  {
    id: '2', 
    email: 'user@company.com',
    password: '123456',
    name: 'Regular User',
    role: 'Viewer'
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      'your-secret-key-here',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
