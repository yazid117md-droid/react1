import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Select,
  Flex,
  Text,
  Badge,
  useToast,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

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

export default function SimpleDashboard() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deviceTypeFilter, setDeviceTypeFilter] = useState('');
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      router.push('/simple-login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchDevices();
  }, [router]);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/devices/simple-devices');
      const data = await response.json();

      if (response.ok) {
        setDevices(data.devices);
      } else {
        toast({
          title: 'خطأ',
          description: 'فشل في تحميل الأجهزة',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'فشل في تحميل الأجهزة',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/simple-login');
    toast({
      title: 'تم تسجيل الخروج',
      description: 'تم تسجيل الخروج بنجاح',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const filteredDevices = devices.filter(device => {
    const matchesSearch = 
      device.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.deviceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.operatingSystem.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDeviceType = !deviceTypeFilter || device.deviceType === deviceTypeFilter;
    
    return matchesSearch && matchesDeviceType;
  });

  const stats = {
    total: devices.length,
    mdmRegistered: devices.filter(d => d.mdmIntuneRegistered).length,
    adLinked: devices.filter(d => d.activeDirectoryLinked).length,
  };

  if (loading) {
    return (
      <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
        <Text>جاري التحميل...</Text>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" shadow="sm" p={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="md" color="blue.500">
              نظام إدارة الأجهزة
            </Heading>
            <HStack>
              <Text fontSize="sm" color="gray.600">
                {user?.name} ({user?.role})
              </Text>
              <Button size="sm" variant="outline" onClick={handleLogout}>
                تسجيل الخروج
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={6} align="stretch">
          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Stat p={6} bg="white" borderRadius="lg" shadow="sm">
              <StatLabel>إجمالي الأجهزة</StatLabel>
              <StatNumber color="blue.500">{stats.total}</StatNumber>
            </Stat>
            <Stat p={6} bg="white" borderRadius="lg" shadow="sm">
              <StatLabel>مسجلة في MDM</StatLabel>
              <StatNumber color="green.500">{stats.mdmRegistered}</StatNumber>
            </Stat>
            <Stat p={6} bg="white" borderRadius="lg" shadow="sm">
              <StatLabel>مرتبطة بـ AD</StatLabel>
              <StatNumber color="purple.500">{stats.adLinked}</StatNumber>
            </Stat>
          </SimpleGrid>

          {/* Filters */}
          <Box bg="white" p={6} borderRadius="lg" shadow="sm">
            <Flex gap={4} mb={6} wrap="wrap">
              <Input
                placeholder="البحث في الأجهزة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                maxW="300px"
              />
              <Select
                placeholder="جميع الأنواع"
                value={deviceTypeFilter}
                onChange={(e) => setDeviceTypeFilter(e.target.value)}
                maxW="200px"
              >
                <option value="Laptop">لابتوب</option>
                <option value="PC">كمبيوتر</option>
                <option value="Mobile">هاتف</option>
                <option value="Tablet">تابلت</option>
                <option value="Other">أخرى</option>
              </Select>
              {user?.role === 'Admin' && (
                <Button leftIcon={<AddIcon />} colorScheme="blue">
                  إضافة جهاز
                </Button>
              )}
            </Flex>

            {/* Devices Table */}
            <Box overflowX="auto">
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>اسم الموظف</Th>
                    <Th>رقم الجهاز</Th>
                    <Th>النوع</Th>
                    <Th>نظام التشغيل</Th>
                    <Th>MDM/Intune</Th>
                    <Th>مرتبط بـ AD</Th>
                    <Th>تاريخ التسجيل</Th>
                    <Th>ملاحظات</Th>
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
                          {device.mdmIntuneRegistered ? 'نعم' : 'لا'}
                        </Badge>
                      </Td>
                      <Td>
                        <Badge colorScheme={device.activeDirectoryLinked ? 'green' : 'red'} variant="subtle">
                          {device.activeDirectoryLinked ? 'نعم' : 'لا'}
                        </Badge>
                      </Td>
                      <Td>{new Date(device.registrationDate).toLocaleDateString('ar-SA')}</Td>
                      <Td maxW="200px" isTruncated>
                        {device.additionalNotes || '-'}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
