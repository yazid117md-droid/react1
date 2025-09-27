import React, { useState, useEffect, useMemo } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Input,
  Select,
  Button,
  Flex,
  Text,
  Badge,
  IconButton,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, DownloadIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
import DeviceForm from './DeviceForm';
import { format } from 'date-fns';

interface Device {
  _id: string;
  employeeName: string;
  deviceId: string;
  deviceType: string;
  operatingSystem: string;
  mdmIntuneRegistered: boolean;
  activeDirectoryLinked: boolean;
  registrationDate: string;
  additionalNotes?: string;
}

interface DeviceTableProps {
  onRefresh: () => void;
}

export default function DeviceTable({ onRefresh }: DeviceTableProps) {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deviceTypeFilter, setDeviceTypeFilter] = useState('');
  const [mdmFilter, setMdmFilter] = useState('');
  const [adFilter, setAdFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const { user } = useAuth();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '10',
        search: searchTerm,
        deviceType: deviceTypeFilter,
        mdmRegistered: mdmFilter,
        adLinked: adFilter,
      });

      const response = await fetch(`/api/devices?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setDevices(data.devices);
        setTotalPages(data.pagination.pages);
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
        description: 'Failed to fetch devices',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, [currentPage, searchTerm, deviceTypeFilter, mdmFilter, adFilter]);

  const handleDelete = async (deviceId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/devices/${deviceId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Device deleted successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        fetchDevices();
        onRefresh();
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
        description: 'Failed to delete device',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    onClose();
  };

  const handleEdit = (device: Device) => {
    setSelectedDevice(device);
    setIsEditing(true);
  };

  const handleExport = async (format: 'pdf' | 'excel') => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams({
        format,
        search: searchTerm,
        deviceType: deviceTypeFilter,
        mdmRegistered: mdmFilter,
        adLinked: adFilter,
      });

      const response = await fetch(`/api/devices/export?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `device-report.${format === 'pdf' ? 'pdf' : 'xlsx'}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        toast({
          title: 'Success',
          description: `Report exported successfully`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to export report',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to export report',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const filteredDevices = useMemo(() => {
    return devices.filter(device => {
      const matchesSearch = 
        device.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.deviceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.operatingSystem.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDeviceType = !deviceTypeFilter || device.deviceType === deviceTypeFilter;
      const matchesMdm = mdmFilter === '' || device.mdmIntuneRegistered === (mdmFilter === 'true');
      const matchesAd = adFilter === '' || device.activeDirectoryLinked === (adFilter === 'true');
      
      return matchesSearch && matchesDeviceType && matchesMdm && matchesAd;
    });
  }, [devices, searchTerm, deviceTypeFilter, mdmFilter, adFilter]);

  if (loading) {
    return (
      <Center h="200px">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box>
      {/* Filters */}
      <Flex gap={4} mb={6} wrap="wrap">
        <Input
          placeholder="Search devices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="300px"
        />
        <Select
          placeholder="All Types"
          value={deviceTypeFilter}
          onChange={(e) => setDeviceTypeFilter(e.target.value)}
          maxW="200px"
        >
          <option value="Laptop">Laptop</option>
          <option value="PC">PC</option>
          <option value="Mobile">Mobile</option>
          <option value="Tablet">Tablet</option>
          <option value="Other">Other</option>
        </Select>
        <Select
          placeholder="MDM Status"
          value={mdmFilter}
          onChange={(e) => setMdmFilter(e.target.value)}
          maxW="150px"
        >
          <option value="true">Registered</option>
          <option value="false">Not Registered</option>
        </Select>
        <Select
          placeholder="AD Status"
          value={adFilter}
          onChange={(e) => setAdFilter(e.target.value)}
          maxW="150px"
        >
          <option value="true">Linked</option>
          <option value="false">Not Linked</option>
        </Select>
        <Button onClick={() => handleExport('excel')} leftIcon={<DownloadIcon />} variant="outline">
          Export Excel
        </Button>
        <Button onClick={() => handleExport('pdf')} leftIcon={<DownloadIcon />} variant="outline">
          Export PDF
        </Button>
      </Flex>

      {/* Table */}
      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Employee</Th>
              <Th>Device ID</Th>
              <Th>Type</Th>
              <Th>OS</Th>
              <Th>MDM/Intune</Th>
              <Th>AD Linked</Th>
              <Th>Registration Date</Th>
              <Th>Notes</Th>
              {user?.role === 'Admin' && <Th>Actions</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {filteredDevices.map((device) => (
              <Tr key={device._id}>
                <Td fontWeight="medium">{device.employeeName}</Td>
                <Td fontFamily="mono" fontSize="sm">{device.deviceId}</Td>
                <Td>
                  <Badge colorScheme="blue" variant="subtle">
                    {device.deviceType}
                  </Badge>
                </Td>
                <Td>{device.operatingSystem}</Td>
                <Td>
                  <Badge colorScheme={device.mdmIntuneRegistered ? 'green' : 'red'} variant="subtle">
                    {device.mdmIntuneRegistered ? 'Yes' : 'No'}
                  </Badge>
                </Td>
                <Td>
                  <Badge colorScheme={device.activeDirectoryLinked ? 'green' : 'red'} variant="subtle">
                    {device.activeDirectoryLinked ? 'Yes' : 'No'}
                  </Badge>
                </Td>
                <Td>{format(new Date(device.registrationDate), 'MMM dd, yyyy')}</Td>
                <Td maxW="200px" isTruncated>
                  {device.additionalNotes || '-'}
                </Td>
                {user?.role === 'Admin' && (
                  <Td>
                    <Flex gap={2}>
                      <IconButton
                        aria-label="Edit device"
                        icon={<EditIcon />}
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(device)}
                      />
                      <IconButton
                        aria-label="Delete device"
                        icon={<DeleteIcon />}
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => {
                          setSelectedDevice(device);
                          onOpen();
                        }}
                      />
                    </Flex>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Pagination */}
      <Flex justify="center" mt={6}>
        <Flex gap={2}>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Text alignSelf="center" px={4}>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Flex>
      </Flex>

      {/* Edit Device Form */}
      {isEditing && selectedDevice && (
        <DeviceForm
          device={selectedDevice}
          isOpen={isEditing}
          onClose={() => {
            setIsEditing(false);
            setSelectedDevice(null);
          }}
          onSuccess={() => {
            fetchDevices();
            onRefresh();
          }}
        />
      )}

      {/* Delete Confirmation */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Device
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete device "{selectedDevice?.deviceId}"? This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => selectedDevice && handleDelete(selectedDevice._id)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
