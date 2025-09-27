import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, SyncIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';
import DeviceTable from '../components/DeviceTable';
import DeviceForm from '../components/DeviceForm';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSync = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/microsoft/sync', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Sync Completed',
          description: `Synced ${data.results.synced} new devices, updated ${data.results.updated} devices`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setRefreshKey(prev => prev + 1);
      } else {
        toast({
          title: 'Sync Failed',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Sync Error',
        description: 'Failed to sync with Microsoft services',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout>
      <Box>
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Heading size="lg" mb={2}>
              Device Management Dashboard
            </Heading>
            <Text color="gray.600">
              Manage and track all company devices in one place
            </Text>
          </Box>
          <Flex gap={3}>
            {user?.role === 'Admin' && (
              <>
                <Button
                  leftIcon={<SyncIcon />}
                  variant="outline"
                  onClick={handleSync}
                >
                  Sync with Microsoft
                </Button>
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="blue"
                  onClick={onOpen}
                >
                  Add Device
                </Button>
              </>
            )}
          </Flex>
        </Flex>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
          <Stat p={6} bg="white" borderRadius="lg" shadow="sm">
            <StatLabel>Total Devices</StatLabel>
            <StatNumber>Loading...</StatNumber>
            <StatHelpText>All registered devices</StatHelpText>
          </Stat>
          <Stat p={6} bg="white" borderRadius="lg" shadow="sm">
            <StatLabel>MDM Registered</StatLabel>
            <StatNumber>Loading...</StatNumber>
            <StatHelpText>Devices in Intune</StatHelpText>
          </Stat>
          <Stat p={6} bg="white" borderRadius="lg" shadow="sm">
            <StatLabel>AD Linked</StatLabel>
            <StatNumber>Loading...</StatNumber>
            <StatHelpText>Active Directory devices</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Device Table */}
        <Box bg="white" borderRadius="lg" shadow="sm" p={6}>
          <DeviceTable key={refreshKey} onRefresh={() => setRefreshKey(prev => prev + 1)} />
        </Box>

        {/* Add Device Form */}
        <DeviceForm
          isOpen={isOpen}
          onClose={onClose}
          onSuccess={() => {
            setRefreshKey(prev => prev + 1);
          }}
        />
      </Box>
    </Layout>
  );
}
