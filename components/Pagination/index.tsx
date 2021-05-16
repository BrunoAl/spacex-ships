import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text } from '@chakra-ui/react';

type Props = {
  totalPages: number;
  currentPage: number;
  sortBy: string;
};

export default function Pagination({ totalPages, currentPage, sortBy }: Props) {
  const router = useRouter();

  const handleNextPage = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    router.push(`/ships/${sortBy}/${currentPage + 1}`);
  };

  const handlePrevPage = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    router.push(`/ships/${sortBy}/${currentPage - 1}`);
  };

  return (
    <Box mt="5" ml="5">
      <Text mt="2" mb="2">
        Page: {currentPage} / {totalPages}
      </Text>
      <Button disabled={currentPage === 1} mr="5" onClick={handlePrevPage}>
        Prev
      </Button>

      <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
        Next
      </Button>
    </Box>
  );
}
