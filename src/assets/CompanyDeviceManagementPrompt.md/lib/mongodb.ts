import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/device-management';

let cached: any = null;

async function dbConnect() {
  if (cached) {
    return cached;
  }

  try {
    const opts = {
      bufferCommands: false,
    };

    cached = await mongoose.connect(MONGODB_URI, opts);
    return cached;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

export default dbConnect;
