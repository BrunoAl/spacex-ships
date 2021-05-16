import React from 'react';
import { useRouter } from 'next/router';
import { Heading, Button, Flex } from '@chakra-ui/react';

export default function Header() {
  const router = useRouter();
  function onLogout() {
    localStorage.removeItem('bruno-spaceX-authenticated');
    router.push('/login');
  }

  return (
    <Flex justifyContent="space-between" alignItems="center" bg="gray.800" height="4rem" px={10}>
      <Heading color="white">SpaceX Ships</Heading>
      <Button onClick={onLogout}>Logout</Button>
    </Flex>
  );
}
