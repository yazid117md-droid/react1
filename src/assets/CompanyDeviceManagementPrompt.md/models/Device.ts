import mongoose, { Document, Schema } from 'mongoose';

export interface IDevice extends Document {
  employeeName: string;
  deviceId: string;
  deviceType: 'Laptop' | 'PC' | 'Mobile' | 'Tablet' | 'Other';
  operatingSystem: string;
  mdmIntuneRegistered: boolean;
  activeDirectoryLinked: boolean;
  registrationDate: Date;
  additionalNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DeviceSchema: Schema = new Schema({
  employeeName: {
    type: String,
    required: [true, 'Employee name is required'],
    trim: true,
  },
  deviceId: {
    type: String,
    required: [true, 'Device ID is required'],
    unique: true,
    trim: true,
  },
  deviceType: {
    type: String,
    required: [true, 'Device type is required'],
    enum: ['Laptop', 'PC', 'Mobile', 'Tablet', 'Other'],
  },
  operatingSystem: {
    type: String,
    required: [true, 'Operating system is required'],
    trim: true,
  },
  mdmIntuneRegistered: {
    type: Boolean,
    default: false,
  },
  activeDirectoryLinked: {
    type: Boolean,
    default: false,
  },
  registrationDate: {
    type: Date,
    required: [true, 'Registration date is required'],
  },
  additionalNotes: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Index for better search performance
DeviceSchema.index({ employeeName: 'text', deviceId: 'text', operatingSystem: 'text' });
DeviceSchema.index({ deviceType: 1 });
DeviceSchema.index({ mdmIntuneRegistered: 1 });
DeviceSchema.index({ activeDirectoryLinked: 1 });

export default mongoose.models.Device || mongoose.model<IDevice>('Device', DeviceSchema);
