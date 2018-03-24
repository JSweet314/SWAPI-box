import { mockWrangledSinglePersonData } from 
  '../../mockData/mockWrangledSinglePersonData';
/* eslint-disable no-undef */
export const fetchSpecies = jest.fn().mockImplementation(() => {
  const result = {...mockWrangledSinglePersonData, species: "Human"};
  return Promise.resolve(result);
});