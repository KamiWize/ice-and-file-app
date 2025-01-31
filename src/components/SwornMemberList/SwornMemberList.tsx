'use client';

import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid2';
import { HouseResponse } from '@/types';
import { SwornMemberCard } from './SwornMemberCard';
import { getHouseById } from '@/lib/api';

type SwornMemberListProps = {
  initialData: HouseResponse;
  houseId: number;
};

const GET_HOUSE_BY_ID = 'GET_HOUSE_BY_ID';

export default function SwornMemberList(props: SwornMemberListProps) {
  const { data, isPending } = useQuery({
    queryKey: [GET_HOUSE_BY_ID, props.houseId],
    queryFn: () => getHouseById(props.houseId),
    initialData: props.initialData,
    placeholderData: (previousData) => previousData,
  });

  if (isPending) return <div>Loading</div>;

  return data.swornMembersData.map((sworn) => (
    <Grid key={sworn.url} size={{ md: 4, sm: 8, xs: 12 }} pb={2}>
      <SwornMemberCard sworn={sworn} />
    </Grid>
  ));
}
