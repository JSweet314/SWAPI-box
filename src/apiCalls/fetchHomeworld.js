import { wrangleHomeworldData } from '../dataWranglers/wrangleHomeworldData';

export const fetchHomeworld = person =>
  fetch(person.homeworld)
    .then(response => response.json())
    .then(wrangleHomeworldData)
    .then(planetData => ({ ...person, ...planetData }));