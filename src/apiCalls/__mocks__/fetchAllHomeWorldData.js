import { mockPeopleData } from '../../mockData/mockMainContainerData';
/* eslint-disable no-undef */
export const fetchAllHomeworldData = jest.fn().mockImplementation(() =>
  Promise.resolve(mockPeopleData));