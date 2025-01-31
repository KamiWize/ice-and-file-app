import { ICE_AND_FIRE_API_ENDPOINT } from '@/lib/constants';
import { House, HouseResponse } from '@/types';
import { http, HttpResponse } from 'msw';
import { HOUSE_MOCK } from './house';
import { SWORN_MEMBER } from './swornMember';

export const handlers = [
  http.get(`${ICE_AND_FIRE_API_ENDPOINT}/houses`, () => {
    const response: Array<House> = [HOUSE_MOCK];

    return HttpResponse.json(response, {
      headers: {
        Link: '<https://anapioficeandfire.com/api/houses?page=2&pageSize=10>; rel="next", <https://anapioficeandfire.com/api/houses?page=1&pageSize=10>; rel="first", <https://anapioficeandfire.com/api/houses?page=45&pageSize=10>; rel="last"',
      },
    });
  }),
  http.get(`${ICE_AND_FIRE_API_ENDPOINT}/houses/:id`, () => {
    const response: HouseResponse = {
      data: HOUSE_MOCK,
      swornMembersData: [SWORN_MEMBER],
    };

    return HttpResponse.json(response);
  }),
];
