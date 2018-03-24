import { mockPeopleData } from '../../mockData/mockMainContainerData';
/* eslint-disable no-undef */
export const fetchAllSpeciesData = jest.fn().mockImplementation(() =>
  Promise.resolve(mockPeopleData));