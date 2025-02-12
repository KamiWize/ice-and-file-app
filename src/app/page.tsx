import { HouseList } from '@/components/HouseList';
import { PaginationController } from '@/components/PaginationController';
import { getHouses } from '@/lib/api';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type HomeProps = {
  searchParams: Promise<{ page: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const houseResponse = await getHouses(currentPage);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Game of Thrones Houses
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <HouseList data={houseResponse} currentPage={currentPage} />
      </Grid>
      <PaginationController totalPages={houseResponse.totalPages} />
    </Container>
  );
}
