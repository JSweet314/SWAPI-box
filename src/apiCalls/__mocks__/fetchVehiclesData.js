import { mockVehiclesData } from '../../mockData/mockMainContainerData';
/* eslint-disable no-undef */
export const fetchVehiclesData = jest.fn().mockImplementation(() =>
  Promise.resolve(mockVehiclesData));
/* eslint-enable no-undef */