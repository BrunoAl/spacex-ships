import React from 'react';
import Link from 'next/link';
import { Table, Button, Thead, Tbody, Th, Tr, Td, Flex } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { IShip } from '../../interfaces/index';

const columnsNames: { title: string; value: string | null }[] = [
  { title: 'Name', value: 'name' },
  { title: 'Type', value: 'type' },
  { title: 'Is active', value: 'active' },
  { title: 'Year built', value: 'year_built' },
  { title: 'Home port', value: 'home_port' },
  { title: 'See details', value: null },
];

type Props = {
  ships: IShip[];
  setSelectedShip: (ship: IShip) => void;
  sortBy: string;
};

export default function Ships({ ships, setSelectedShip, sortBy }: Props) {
  const shipsData = React.useMemo(
    () =>
      ships.map(ship => ({
        name: ship.name,
        type: ship.type,
        active: ship.active ? 'Yes' : 'No',
        year_built: ship.year_built || 'Unknown',
        home_port: ship.home_port,
        details: (
          <Button onClick={() => setSelectedShip(ship)} colorScheme="teal">
            View
          </Button>
        ),
      })),
    [ships],
  );

  return (
    <Table variant="simple" mt="10">
      <Thead>
        <Tr>
          {columnsNames.map(({ title, value }) => (
            <Th key={value}>
              {value ? (
                <Flex alignItems="center">
                  <Link href={`/ships/${value}/1`}>{title}</Link>
                  {sortBy === value && <ChevronDownIcon w={5} h={5} />}
                </Flex>
              ) : (
                title
              )}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {shipsData.map(ship => (
          <Tr key={ship.name}>
            <Td>{ship.name}</Td>
            <Td>{ship.type}</Td>
            <Td>{ship.active}</Td>
            <Td>{ship.year_built}</Td>
            <Td>{ship.home_port}</Td>
            <Td>{ship.details}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
