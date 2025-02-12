'use client';

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationControllerProps = {
  totalPages?: number;
};

export default function PaginationController(props: PaginationControllerProps) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const queryPage = Number(searchParams.get('page')) || 1;

  return (
    <Pagination
      page={queryPage}
      count={props.totalPages}
      variant="outlined"
      shape="rounded"
      onChange={(_, page: number) => router.push(`/?page=${page}`)}
    />
  );
}
