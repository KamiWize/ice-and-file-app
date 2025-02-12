'use client';

import Grid from '@mui/material/Grid2';
import { HouseResponse } from '@/types';
import { SwornMemberCard } from './SwornMemberCard';

type SwornMemberListProps = {
  data: HouseResponse;
  houseId: number;
};

export default function SwornMemberList(props: SwornMemberListProps) {
  return props.data.swornMembersData.map((sworn) => (
    <Grid key={sworn.url} size={{ md: 4, sm: 8, xs: 12 }} pb={2}>
      <SwornMemberCard sworn={sworn} />
    </Grid>
  ));
}
