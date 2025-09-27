import React, { useState, useEffect } from 'react';
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
  Link,
  Alert,
  AlertIcon,
  useToast,
  Center,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { login, isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push('/');
      }
    } catch (error) {
      toast({
        title: 'Login Error',
        description: 'An unexpected error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name: email.split('@')[0] }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Registration Successful',
          description: 'Account created successfully. Please login.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setShowRegister(false);
      } else {
        toast({
          title: 'Registration Failed',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Registration Error',
        description: 'Network error. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <Center h="100vh">
        <Text>Loading...</Text>
      </Center>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50" py={12}>
      <Container maxW="md">
        <Card>
          <CardBody p={8}>
            <VStack spacing={6}>
              <Box textAlign="center">
                <Heading size="lg" color="brand.500" mb={2}>
                  Device Management
                </Heading>
                <Text color="gray.600">
                  {showRegister ? 'Create your account' : 'Sign in to your account'}
                </Text>
              </Box>

              <Box w="full">
                <form onSubmit={showRegister ? handleRegister : handleLogin}>
                  <VStack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        minLength={6}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="blue"
                      w="full"
                      isLoading={loading}
                      loadingText={showRegister ? 'Creating...' : 'Signing in...'}
                    >
                      {showRegister ? 'Create Account' : 'Sign In'}
                    </Button>
                  </VStack>
                </form>
              </Box>

              <Text fontSize="sm" color="gray.600">
                {showRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
                <Link
                  color="blue.500"
                  onClick={() => setShowRegister(!showRegister)}
                  cursor="pointer"
                >
                  {showRegister ? 'Sign in' : 'Create one'}
                </Link>
              </Text>

              {showRegister && (
                <Alert status="info" borderRadius="md">
                  <AlertIcon />
                  <Text fontSize="sm">
                    New accounts are created with Viewer permissions. Contact an admin to upgrade your access.
                  </Text>
                </Alert>
              )}
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}
