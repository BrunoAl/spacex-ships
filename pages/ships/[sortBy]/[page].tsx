import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { addPagesToPaths, getShips } from '../../../utils';
import { useRouter } from 'next/router';
import { Grid } from '@chakra-ui/react';
import { IShip } from '../../../interfaces/index';
import Ships from '../../../components/Ships';
import Header from '../../../components/Header';
import Pagination from '../../../components/Pagination';
import ShipDetails from '../../../components/ShipDetails';

const sortableValue = ['name', 'type', 'active', 'year_built', 'home_port'];

type Props = {
  ships: IShip[];
  page: number;
  totalPages: number;
  sortBy: string;
  API_URL: string;
};

export default function ShipsPage({ ships, page, totalPages, sortBy, API_URL }: Props) {
  const [selectedShip, setSelectedShip] = React.useState<IShip | null>(null);

  const router = useRouter();
  const { query } = router;

  if (typeof window !== 'undefined' && !query.isAuthenticated && !localStorage.getItem('bruno-spaceX-authenticated')) {
    router.replace('/login');
    return null;
  }

  return (
    <div>
      <Header />
      <Grid templateColumns="repeat(2, 1fr)" height="100vh">
        <div>
          <Ships ships={ships} setSelectedShip={setSelectedShip} sortBy={sortBy} />
          <Pagination currentPage={Number(page)} totalPages={totalPages} sortBy={sortBy} />
        </div>
        <ShipDetails selectedShip={selectedShip} API_URL={API_URL} />
      </Grid>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { totalPages } = await getShips({});

  return {
    paths: addPagesToPaths(
      sortableValue.map(item => ({ params: { sortBy: item } })),
      totalPages,
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { sortBy, page } = context.params;

  const { API_URL } = process.env;

  const ships = await getShips({ page: Number(page), sortBy: Array.isArray(sortBy) ? sortBy[0] : sortBy });

  return {
    props: {
      ships: ships.docs,
      totalPages: ships.totalPages,
      page,
      sortBy,
      API_URL,
    },
  };
};
