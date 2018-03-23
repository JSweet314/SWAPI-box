import {wrangleHomeworldData} from '../dataWranglers/wrangleHomeworldData';

export const fetchAllHomeworldData = peopleData => 
  Promise.all(peopleData.peopleArray.map(fetchHomeworld))
    .then(peopleArray => ({...peopleData, peopleArray}));

export const fetchHomeworld = person => 
  fetch(person.homeworld)
    .then(response => response.json())
    .then(wrangleHomeworldData)
    .then(planetData => ({...person, ...planetData}));
