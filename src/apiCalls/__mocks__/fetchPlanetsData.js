import {mockPlanetsData} from '../../mockData/mockMainContainerData';
/* eslint-disable no-undef */
export const fetchPlanetsData = jest.fn().mockImplementation(() => 
  Promise.resolve(mockPlanetsData));
/* eslint-enable no-undef */