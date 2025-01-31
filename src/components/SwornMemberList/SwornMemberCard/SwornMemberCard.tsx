'use client';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import { SwornMember } from '@/types';

type SwornMemberCardProps = {
  sworn: SwornMember;
};

export default function SwornMemberCard(props: SwornMemberCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '11em',
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" textAlign="center">
          {props.sworn.name || 'Unknown Sworn member'}
        </Typography>
        <Grid container justifyContent="center">
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mr={1}
          >
            {props.sworn.gender} |
          </Typography>
          <Chip
            label={props.sworn.died ? 'Death' : 'Alive...yet'}
            size="small"
            color={props.sworn.died ? 'error' : 'success'}
          />
        </Grid>
        <Typography variant="body2" textAlign="center" fontStyle="italic">
          {props.sworn.titles.length
            ? props.sworn.titles.join(', ')
            : 'No Titles'}
        </Typography>
      </CardContent>
    </Card>
  );
}
