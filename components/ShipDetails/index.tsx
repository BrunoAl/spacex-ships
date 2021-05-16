import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { Box, Flex, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { IShip } from '../../interfaces';

type Props = {
  selectedShip: IShip;
  API_URL: string;
};

const fetcher = url => fetch(url).then(res => res.json());

export default function ShipDetails({ selectedShip: ship, API_URL }: Props) {
  if (!ship)
    return (
      <Flex bg="gray.700" justifyItems="center">
        <Text m="0 auto" mt="10" color="white" fontSize="xl">
          Select a ship to see the details!
        </Text>
      </Flex>
    );

  const launchesQuery = ship.launches.reduce((acc, launch) => {
    return `${acc}launches[]=${launch}&`;
  }, '?');

  const { data: launchesData } = useSWR(`${API_URL}/launches${launchesQuery}`, fetcher);

  const { launches = [] }: { launches } = launchesData || {};

  const launchesWikipedia: [] = launches && launches.length > 0 ? launches.map(launch => launch.links.wikipedia) : [];

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
          <span key={role}> &bull; {role}</span>
        ))}
      </Box>
      {launchesWikipedia.length > 0 && (
        <Box color="white" fontWeight="semibold" letterSpacing="wide" fontSize="xs" pl="5" mt="10">
          Launches:
          <UnorderedList>
            {launchesWikipedia.map(link => (
              <ListItem key={link}>
                {
                  <Link href={link} isExternal>
                    {link} <ExternalLinkIcon mx="2px" />
                  </Link>
                }
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
    </Flex>
  );
}
