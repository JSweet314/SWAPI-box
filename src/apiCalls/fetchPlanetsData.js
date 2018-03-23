import {wranglePlanetsData} from '../dataWranglers/wranglePlanetsData';

export const fetchPlanetsData = (url) => {
  const address = url || "https://swapi.co/api/planets/?format=json&page=1";
  return fetch(address)
    .then(response => response.json())
    .then(wranglePlanetsData);
};