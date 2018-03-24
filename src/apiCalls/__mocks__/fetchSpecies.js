import { mockWrangledSinglePersonData } from 
  '../../mockData/mockWrangledSinglePersonData';
/* eslint-disable no-undef */
export const fetchSpecies = jest.fn().mockImplementation(() =>
  Promise.resolve(mockWrangledSinglePersonData));