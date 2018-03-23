import {wrangleVehiclesData} from '../dataWranglers/wrangleVehiclesData';

export const fetchVehiclesData = (url) => {
  const address = url || "https://swapi.co/api/vehicles/?format=json&page=1";
  return fetch(address)
    .then(response => response.json())
    .then(wrangleVehiclesData);
};