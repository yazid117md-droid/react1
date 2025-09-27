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
import { useRouter } from 'next/router';

export default function SimpleLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/simple-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        toast({
          title: 'تم تسجيل الدخول بنجاح!',
          description: `مرحباً ${data.user.name}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        router.push('/simple-dashboard');
      } else {
        toast({
          title: 'خطأ في تسجيل الدخول',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'خطأ في الشبكة',
        description: 'يرجى المحاولة مرة أخرى',
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
            <Heading size="lg" color="blue.500" mb={2}>
              نظام إدارة الأجهزة
            </Heading>
            <Text color="gray.600">
              تسجيل الدخول إلى النظام
            </Text>
          </Box>

          <Alert status="info" borderRadius="md">
            <AlertIcon />
            <Text fontSize="sm">
              <strong>حسابات تجريبية:</strong><br/>
              مدير: admin@company.com / 123456<br/>
              مستخدم: user@company.com / 123456
            </Text>
          </Alert>

          <Box w="full" bg="white" p={6} borderRadius="lg" shadow="sm">
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>كلمة المرور</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة المرور"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  w="full"
                  isLoading={loading}
                  loadingText="جاري تسجيل الدخول..."
                >
                  تسجيل الدخول
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
