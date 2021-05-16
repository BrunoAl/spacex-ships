import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Input, Button, FormControl, FormLabel, Checkbox, Text } from '@chakra-ui/react';
import { isEmailValid } from '../utils/index';

const fakeCredentials = {
  email: 'email@test.com',
  password: 'test123',
};

export default function Login() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const [isCredentialInvalid, setIsCredentialInvalid] = React.useState<boolean>(false);

  const router = useRouter();

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function onRememberMeChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setRememberMe(e.target.checked);
  }

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (email === fakeCredentials.email && password === fakeCredentials.password) {
      router.push({ pathname: '/ships/name/1', query: { isAuthenticated: true } });
      if (rememberMe && typeof window !== 'undefined') {
        localStorage.setItem('bruno-spaceX-authenticated', `${rememberMe}`);
      }
    } else {
      setIsCredentialInvalid(true);
    }
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.200" p={12} rounded={6} w="25rem">
        <Heading mb={6}>Login</Heading>
        <form onSubmit={onSubmit}>
          <FormControl id="first-name" isRequired>
            <FormLabel>Enter your email address</FormLabel>
            <Input
              placeholder="some@email.com"
              variant="filled"
              mb={3}
              type="email"
              value={email}
              onChange={onEmailChange}
              isInvalid={!isEmailValid(email) && email !== ''}
            />
          </FormControl>
          <FormControl id="first-name" isRequired>
            <FormLabel>Enter your password</FormLabel>
            <Input
              placeholder="********"
              variant="filled"
              mb={6}
              type="password"
              value={password}
              onChange={onPasswordChange}
            />
          </FormControl>
          <Checkbox isChecked={rememberMe} onChange={onRememberMeChange} mb={3} borderColor="gray.500">
            Remember me
          </Checkbox>
          <Button type="submit" colorScheme="teal" d="block">
            Login
          </Button>
          {isCredentialInvalid && (
            <Text fontSize="12px" color="tomato" mt="2">
              Invalid credentials!
            </Text>
          )}
        </form>
      </Flex>
    </Flex>
  );
}
