'use client';

import Grid from '@mui/material/Grid2';
import { HouseCard } from './HouseCard';
import { HouseListResponse } from '@/types';
import Typography from '@mui/material/Typography';

type HouseListProps = {
  data: HouseListResponse;
  currentPage: number;
};

export default function HouseList(props: HouseListProps) {
  return (
    <>
      {props.data.houseData.length === 0 ? (
        <Grid>
          <Typography variant="body1" component="p">
            No houses found
          </Typography>
        </Grid>
      ) : (
        props.data.houseData?.map((house) => (
          <Grid size={{ md: 4, sm: 8, xs: 12 }} key={house.url}>
            <HouseCard data={house} />
          </Grid>
        ))
      )}
    </>
  );
}
