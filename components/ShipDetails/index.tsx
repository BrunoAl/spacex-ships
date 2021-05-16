import React from 'react';
import Image from 'next/image';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import { IShip } from '../../interfaces';

type Props = {
  selectedShip: IShip;
};

export default function ShipDetails({ selectedShip: ship }: Props) {
  if (!ship)
    return (
      <Flex bg="gray.700" justifyItems="center">
        <Text m="0 auto" mt="10" color="white" fontSize="xl">
          Select a ship to see the details!
        </Text>
      </Flex>
    );

  return (
    <Flex bg="gray.700" flexDir="column" height="100vh">
      {ship.image ? (
        <Image src={ship.image} alt={ship.name} width={500} height={500} />
      ) : (
        <Image src={'https://via.placeholder.com/500'} alt="placeholder" width={500} height={500} />
      )}

      <Box mt="5" fontWeight="semibold" as="h2" lineHeight="tight" isTruncated pl="5" color="whitesmoke">
        {ship.name}
      </Box>
      <Box color="white" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" pl="5">
        {ship.year_built}{' '}
        {ship.roles.map(role => (
          <span key={role}>&bull; {role}</span>
        ))}
      </Box>
      <Box
        color="white"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        pl="5"
        mt="10"
      >
        Launches: TODO
      </Box>
    </Flex>
  );
}
