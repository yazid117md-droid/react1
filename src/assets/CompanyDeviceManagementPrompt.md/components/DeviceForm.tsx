import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Switch,
  useToast,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

interface Device {
  _id?: string;
  employeeName: string;
  deviceId: string;
  deviceType: 'Laptop' | 'PC' | 'Mobile' | 'Tablet' | 'Other';
  operatingSystem: string;
  mdmIntuneRegistered: boolean;
  activeDirectoryLinked: boolean;
  registrationDate: string;
  additionalNotes?: string;
}

interface DeviceFormProps {
  device?: Device | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeviceForm({ device, isOpen, onClose, onSuccess }: DeviceFormProps) {
  const [formData, setFormData] = useState<Device>({
    employeeName: '',
    deviceId: '',
    deviceType: 'Laptop',
    operatingSystem: '',
    mdmIntuneRegistered: false,
    activeDirectoryLinked: false,
    registrationDate: new Date().toISOString().split('T')[0],
    additionalNotes: '',
  });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (device) {
      setFormData({
        ...device,
        registrationDate: device.registrationDate ? new Date(device.registrationDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      });
    } else {
      setFormData({
        employeeName: '',
        deviceId: '',
        deviceType: 'Laptop',
        operatingSystem: '',
        mdmIntuneRegistered: false,
        activeDirectoryLinked: false,
        registrationDate: new Date().toISOString().split('T')[0],
        additionalNotes: '',
      });
    }
  }, [device]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const url = device ? `/api/devices/${device._id}` : '/api/devices';
      const method = device ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Success',
          description: device ? 'Device updated successfully' : 'Device created successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        onSuccess();
        onClose();
      } else {
        toast({
          title: 'Error',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Network error. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof Device, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>
            {device ? 'Edit Device' : 'Add New Device'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Employee Name</FormLabel>
                <Input
                  value={formData.employeeName}
                  onChange={(e) => handleChange('employeeName', e.target.value)}
                  placeholder="Enter employee name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Device ID</FormLabel>
                <Input
                  value={formData.deviceId}
                  onChange={(e) => handleChange('deviceId', e.target.value)}
                  placeholder="Enter device ID"
                />
              </FormControl>

              <HStack spacing={4} w="full">
                <FormControl isRequired>
                  <FormLabel>Device Type</FormLabel>
                  <Select
                    value={formData.deviceType}
                    onChange={(e) => handleChange('deviceType', e.target.value)}
                  >
                    <option value="Laptop">Laptop</option>
                    <option value="PC">PC</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Operating System</FormLabel>
                  <Input
                    value={formData.operatingSystem}
                    onChange={(e) => handleChange('operatingSystem', e.target.value)}
                    placeholder="e.g., Windows 11, macOS 14, iOS 17"
                  />
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel>Registration Date</FormLabel>
                <Input
                  type="date"
                  value={formData.registrationDate}
                  onChange={(e) => handleChange('registrationDate', e.target.value)}
                />
              </FormControl>

              <HStack spacing={8} w="full">
                <FormControl>
                  <FormLabel>MDM/Intune Registered</FormLabel>
                  <Switch
                    isChecked={formData.mdmIntuneRegistered}
                    onChange={(e) => handleChange('mdmIntuneRegistered', e.target.checked)}
                    colorScheme="green"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Active Directory Linked</FormLabel>
                  <Switch
                    isChecked={formData.activeDirectoryLinked}
                    onChange={(e) => handleChange('activeDirectoryLinked', e.target.checked)}
                    colorScheme="blue"
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Additional Notes</FormLabel>
                <Textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleChange('additionalNotes', e.target.value)}
                  placeholder="Enter any additional notes about the device"
                  rows={3}
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={loading}
              loadingText={device ? 'Updating...' : 'Creating...'}
            >
              {device ? 'Update Device' : 'Create Device'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
