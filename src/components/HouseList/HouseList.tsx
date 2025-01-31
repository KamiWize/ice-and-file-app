'use client';

import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid2';
import { HouseCard } from './HouseCard';
import { getHouses } from '@/lib/api';
import { HouseListResponse } from '@/types';

type HouseListProps = {
  initialData: HouseListResponse;
  currentPage: number;
};

export const GET_HOUSES_QUERY_KEY = 'GET_HOUSES_QUERY_KEY';

export default function HouseList(props: HouseListProps) {
  const { data, isPending } = useQuery({
    queryKey: [GET_HOUSES_QUERY_KEY, props.currentPage],
    queryFn: () => getHouses(props.currentPage),
    initialData: props.initialData,
    placeholderData: (previousData) => previousData,
  });

  if (isPending) return <div>Loading</div>;

  return data.houseData?.map((house) => (
    <Grid size={{ md: 4, sm: 8, xs: 12 }} key={house.url}>
      <HouseCard data={house} />
    </Grid>
  ));
}
