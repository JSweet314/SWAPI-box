import {mockPeopleData} from '../../mockData/mockMainContainerData';
/* eslint-disable no-undef */
export const fetchPeopleData = jest.fn().mockImplementation(() => 
  Promise.resolve(mockPeopleData));