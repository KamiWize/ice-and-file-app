import { redirect } from 'next/navigation';
import { HouseList } from '@/components/HouseList';
import { PaginationController } from '@/components/PaginationController';
import { getHouses } from '@/lib/api';
import { isNumber } from '@/utils';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type HomeProps = {
  searchParams: Promise<{ page: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;

  if (!isNumber(page)) {
    redirect('/?page=1');
  }

  const currentPage = Number(page);

  const houseResponse = await getHouses(currentPage);

  return (
    <Container sx={{ mt: 4 }} component="main">
      <Typography variant="h4" gutterBottom component="h1">
        Game of Thrones Houses
      </Typography>
      <Grid container spacing={2} justifyContent="center" component="section">
        <HouseList data={houseResponse} currentPage={currentPage} />
      </Grid>
      <Grid
        container
        mt={4}
        spacing={4}
        justifyContent="center"
        component="section"
      >
        <PaginationController totalPages={houseResponse.totalPages} />
      </Grid>
    </Container>
  );
}
