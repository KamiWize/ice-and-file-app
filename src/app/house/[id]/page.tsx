import SwornMemberList from '@/components/SwornMemberList/SwornMemberList';
import { getHouseById } from '@/lib/api';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type HouseProps = {
  params: Promise<{ id: string }>;
};

export default async function House({ params }: HouseProps) {
  const { id } = await params;
  const houseId = Number(id) || 1;
  const swornListData = await getHouseById(houseId);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Sworn member of {swornListData.data.name}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <SwornMemberList data={swornListData} houseId={houseId} />
      </Grid>
    </Container>
  );
}
