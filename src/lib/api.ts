'use server';

import { redirect } from 'next/navigation';
import { ICE_AND_FIRE_API_ENDPOINT } from './constants';
import { House, HouseListResponse, HouseResponse, SwornMember } from '@/types';
import { getPageData } from '@/utils';

export const getHouses = async (
  page: number,
  pageSize: number = 10
): Promise<HouseListResponse> => {
  const response = await fetch(
    `${ICE_AND_FIRE_API_ENDPOINT}/houses?page=${page}&pageSize=${pageSize}`
  );

  if (!response.ok) {
    redirect('/');
  }

  // The Link header has the pagination information like last page, current page, etc.
  const linkHeader = response.headers.get('Link');
  const totalPages = getPageData(linkHeader ?? '');

  const listOfHouses = (await response.json()) as Array<House>;

  return {
    houseData: listOfHouses,
    totalPages,
  };
};

export const getHouseById = async (houseId: number): Promise<HouseResponse> => {
  const response = await fetch(
    `${ICE_AND_FIRE_API_ENDPOINT}/houses/${houseId}`
  );

  if (!response.ok) {
    redirect('/');
  }

  const houseResponse = (await response.json()) as House;

  const swornListResult = await Promise.allSettled(
    houseResponse.swornMembers.map(async (member) => {
      const response = await fetch(member);

      if (!response.ok) throw new Error('Failed to fetch sworn member');

      const swornMembersData = (await response.json()) as SwornMember;

      return swornMembersData;
    })
  );

  const hasSwornErrorLoad = swornListResult.some(
    (member) => member.status === 'rejected'
  );

  if (hasSwornErrorLoad) {
    redirect('/');
  }

  const swornList = swornListResult
    .filter((member) => member.status === 'fulfilled')
    .map((member) => member.value);

  return {
    data: houseResponse,
    swornMembersData: swornList,
  };
};
