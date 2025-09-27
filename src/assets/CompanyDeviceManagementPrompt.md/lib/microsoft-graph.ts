import { Client } from '@microsoft/microsoft-graph-client';
import { AuthenticationProvider } from '@microsoft/microsoft-graph-client';

class CustomAuthenticationProvider implements AuthenticationProvider {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getAccessToken(): Promise<string> {
    return this.accessToken;
  }
}

export class MicrosoftGraphService {
  private client: Client;

  constructor(accessToken: string) {
    const authProvider = new CustomAuthenticationProvider(accessToken);
    this.client = Client.initWithMiddleware({ authProvider });
  }

  async getAccessToken(): Promise<string> {
    const tokenResponse = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.MICROSOFT_CLIENT_ID!,
        client_secret: process.env.MICROSOFT_CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    });

    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  }

  async getDevices(): Promise<any[]> {
    try {
      const devices = await this.client.api('/devices').get();
      return devices.value || [];
    } catch (error) {
      console.error('Error fetching devices from Microsoft Graph:', error);
      return [];
    }
  }

  async getManagedDevices(): Promise<any[]> {
    try {
      const managedDevices = await this.client.api('/deviceManagement/managedDevices').get();
      return managedDevices.value || [];
    } catch (error) {
      console.error('Error fetching managed devices:', error);
      return [];
    }
  }

  async getUsers(): Promise<any[]> {
    try {
      const users = await this.client.api('/users').get();
      return users.value || [];
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  async syncDeviceData(): Promise<any[]> {
    try {
      const [devices, managedDevices, users] = await Promise.all([
        this.getDevices(),
        this.getManagedDevices(),
        this.getUsers(),
      ]);

      // Create a map of users for quick lookup
      const userMap = new Map(users.map(user => [user.id, user]));

      // Combine and normalize device data
      const combinedDevices = [
        ...devices.map(device => ({
          ...device,
          source: 'Active Directory',
          user: userMap.get(device.registeredOwners?.[0]?.id),
        })),
        ...managedDevices.map(device => ({
          ...device,
          source: 'Intune',
          user: userMap.get(device.userId),
        })),
      ];

      return combinedDevices;
    } catch (error) {
      console.error('Error syncing device data:', error);
      return [];
    }
  }
}

export async function getMicrosoftGraphService(): Promise<MicrosoftGraphService> {
  const service = new MicrosoftGraphService('');
  const accessToken = await service.getAccessToken();
  return new MicrosoftGraphService(accessToken);
}
