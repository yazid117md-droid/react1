import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const bg = useColorModeValue('white', 'gray.800');

  const handleLogout = () => {
    logout();
  };

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box bg={bg} shadow="sm" position="sticky" top={0} zIndex={1000}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Heading size="md" color="brand.500" cursor="pointer" onClick={() => router.push('/')}>
              Device Management
            </Heading>
            
            <Flex alignItems="center" gap={4}>
              {user && (
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                    <Flex alignItems="center" gap={2}>
                      <Avatar size="sm" name={user.name} />
                      <Box textAlign="left">
                        <Text fontSize="sm" fontWeight="bold">
                          {user.name}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {user.role}
                        </Text>
                      </Box>
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
      
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </Box>
  );
}
