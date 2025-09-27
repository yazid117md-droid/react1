# Company Device Management System

A comprehensive web application for managing and documenting company devices with Microsoft Intune and Active Directory integration.

## Features

### 🔧 Core Features
- **Device Management**: Add, edit, delete, and view all company devices
- **Advanced Search & Filtering**: Search by employee name, device ID, OS, and filter by device type, MDM status, and AD linkage
- **Role-based Access Control**: Admin and Viewer roles with different permissions
- **Export Functionality**: Export device data to PDF and Excel formats
- **Real-time Notifications**: Toast notifications for all device operations

### 📊 Device Data Fields
- Employee Name
- Device ID (unique identifier)
- Device Type (Laptop, PC, Mobile, Tablet, Other)
- Operating System
- MDM/Intune Registration Status
- Active Directory Linkage Status
- Registration Date
- Additional Notes

### 🔗 Microsoft Integration
- **Microsoft Graph API**: Direct integration with Microsoft services
- **Intune Sync**: Automatic synchronization with Microsoft Intune
- **Active Directory**: Integration with AD for device and user data
- **One-click Sync**: Manual sync button to update data from Microsoft services

## Technology Stack

### Frontend
- **Next.js 14** with TypeScript
- **Chakra UI** for modern, accessible components
- **Framer Motion** for smooth animations
- **TanStack Table** for advanced table functionality
- **React Hook Form** for form management
- **React Toastify** for notifications

### Backend
- **Next.js API Routes** for serverless backend
- **MongoDB** with Mongoose for database
- **JWT Authentication** for secure access
- **bcryptjs** for password hashing

### Export & Integration
- **jsPDF** for PDF generation
- **SheetJS (XLSX)** for Excel export
- **Microsoft Graph Client** for Microsoft services integration

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database
- Microsoft Azure App Registration (for Microsoft Graph integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-device-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/device-management
   
   # NextAuth
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   
   # Microsoft Graph API
   MICROSOFT_CLIENT_ID=your-microsoft-client-id
   MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
   MICROSOFT_TENANT_ID=your-tenant-id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Microsoft Graph Setup

1. **Create Azure App Registration**
   - Go to Azure Portal > App registrations
   - Create a new registration
   - Note down the Application (client) ID and Directory (tenant) ID

2. **Generate Client Secret**
   - In your app registration, go to "Certificates & secrets"
   - Create a new client secret
   - Note down the secret value

3. **Configure API Permissions**
   Add the following Microsoft Graph permissions:
   - `Device.Read.All` (Application)
   - `DeviceManagementManagedDevices.Read.All` (Application)
   - `User.Read.All` (Application)

4. **Update Environment Variables**
   Add your Microsoft credentials to `.env.local`

## Usage

### Authentication
- **Registration**: New users are created with Viewer permissions by default
- **Admin Access**: Contact an existing admin to upgrade your role
- **Login**: Use your email and password to access the system

### Device Management
- **Adding Devices**: Click "Add Device" to manually add new devices
- **Editing Devices**: Click the edit icon in the device table
- **Deleting Devices**: Click the delete icon (Admin only)
- **Search & Filter**: Use the search bar and filter dropdowns to find specific devices

### Microsoft Integration
- **Sync Devices**: Click "Sync with Microsoft" to import devices from Intune and AD
- **Automatic Updates**: Synced devices include metadata from Microsoft services
- **User Mapping**: Devices are automatically linked to user accounts

### Exporting Data
- **Excel Export**: Click "Export Excel" to download data as .xlsx file
- **PDF Export**: Click "Export PDF" to generate a formatted report
- **Filtered Exports**: Apply filters before exporting to get specific data subsets

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Device Management
- `GET /api/devices` - List devices with pagination and filtering
- `POST /api/devices` - Create new device (Admin only)
- `GET /api/devices/[id]` - Get specific device
- `PUT /api/devices/[id]` - Update device (Admin only)
- `DELETE /api/devices/[id]` - Delete device (Admin only)
- `GET /api/devices/export` - Export devices to PDF/Excel

### Microsoft Integration
- `POST /api/microsoft/sync` - Sync with Microsoft services (Admin only)

## Database Schema

### Device Model
```typescript
interface Device {
  employeeName: string;
  deviceId: string; // Unique
  deviceType: 'Laptop' | 'PC' | 'Mobile' | 'Tablet' | 'Other';
  operatingSystem: string;
  mdmIntuneRegistered: boolean;
  activeDirectoryLinked: boolean;
  registrationDate: Date;
  additionalNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### User Model
```typescript
interface User {
  email: string; // Unique
  password: string; // Hashed
  role: 'Admin' | 'Viewer';
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Role-based Access**: Different permissions for Admin and Viewer roles
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure API access

## Deployment

### Production Environment Variables
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/device-management
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.com
MICROSOFT_CLIENT_ID=your-production-client-id
MICROSOFT_CLIENT_SECRET=your-production-client-secret
MICROSOFT_TENANT_ID=your-production-tenant-id
```

### Build for Production
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.
