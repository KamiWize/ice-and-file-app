'use client';

import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid2';
import { House } from '@/types';

type HouseCardProps = {
  data: House;
};

export default function HouseCard(props: HouseCardProps) {
  const router = useRouter();

  const hasSwornMembers = props.data.swornMembers.length === 0;

  const getHouseId = useMemo(() => {
    return props.data.url.split('/').pop();
  }, [props.data]);

  const redirectToHouseDetail = useCallback(() => {
    router.push(`/house/${getHouseId}`);
  }, [router, getHouseId]);

  return (
    <Card sx={{ minHeight: 100 }}>
      <CardContent>
        <Typography variant="h6" mb={1}>
          {props.data.name || 'Unknown House'}
        </Typography>
        <Typography variant="subtitle1" mb={2}>
          {hasSwornMembers
            ? 'This house has no sworn members'
            : `This house contains ${props.data.swornMembers.length} sworn members`}
        </Typography>
        <Grid container justifyContent="flex-end">
          <Button
            data-testid="see-more-button"
            variant="outlined"
            startIcon={<SendIcon />}
            disabled={hasSwornMembers}
            onClick={redirectToHouseDetail}
          >
            See more
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
