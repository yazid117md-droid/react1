import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  useToast,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

export default function PromoteUser() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const toast = useToast();

  const handlePromote = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/promote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Success',
          description: `User ${email} promoted to Admin successfully!`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setEmail('');
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

  return (
    <Box minH="100vh" bg="gray.50" py={12}>
      <Container maxW="md">
        <VStack spacing={6}>
          <Box textAlign="center">
            <Heading size="lg" color="brand.500" mb={2}>
              Promote User to Admin
            </Heading>
            <Text color="gray.600">
              Enter email to promote user to Admin role
            </Text>
          </Box>

          <Alert status="info" borderRadius="md">
            <AlertIcon />
            <Text fontSize="sm">
              This will give the user full admin access to manage devices.
            </Text>
          </Alert>

          <Box w="full" bg="white" p={6} borderRadius="lg" shadow="sm">
            <form onSubmit={handlePromote}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>User Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter user email to promote"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  w="full"
                  isLoading={loading}
                  loadingText="Promoting..."
                >
                  Promote to Admin
                </Button>
              </VStack>
            </form>
          </Box>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            Current user: {user?.email} ({user?.role})
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
