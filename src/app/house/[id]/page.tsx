import SwornMemberList from '@/components/SwornMemberList/SwornMemberList';
import { getHouseById } from '@/lib/api';
import { isNumber } from '@/utils';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { redirect } from 'next/navigation';

type HouseProps = {
  params: Promise<{ id: string }>;
};

export default async function House({ params }: HouseProps) {
  const { id } = await params;

  if (!isNumber(id)) {
    redirect('/');
  }

  const houseId = Number(id);

  const swornListData = await getHouseById(houseId);

  return (
    <Container sx={{ mt: 4 }} component="main">
      <Typography variant="h4" gutterBottom textAlign="center" component="h1">
        Sworn member of {swornListData.data.name}
      </Typography>
      <Grid container spacing={2} justifyContent="center" component="section">
        <SwornMemberList data={swornListData} houseId={houseId} />
      </Grid>
    </Container>
  );
}
