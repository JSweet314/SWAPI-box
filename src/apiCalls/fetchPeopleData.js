import {wranglePeopleData} from '../dataWranglers/wranglePeopleData';

export const fetchPeopleData = (url) => {
  const address = url || "https://swapi.co/api/people/?format=json&page=1";
  return fetch(address)
    .then(response => response.json())
    .then(wranglePeopleData);
};