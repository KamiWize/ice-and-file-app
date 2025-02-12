'use client';

import Grid from '@mui/material/Grid2';
import { HouseCard } from './HouseCard';
import { HouseListResponse } from '@/types';

type HouseListProps = {
  data: HouseListResponse;
  currentPage: number;
};

export const GET_HOUSES_QUERY_KEY = 'GET_HOUSES_QUERY_KEY';

export default function HouseList(props: HouseListProps) {
  return props.data.houseData?.map((house) => (
    <Grid size={{ md: 4, sm: 8, xs: 12 }} key={house.url}>
      <HouseCard data={house} />
    </Grid>
  ));
}
