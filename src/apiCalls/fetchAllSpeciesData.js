import {wrangleSpeciesData} from '../dataWranglers/wrangleSpeciesData';

export const fetchAllSpeciesData = peopleData =>
  Promise.all(peopleData.peopleArray.map(fetchSpecies))
    .then(peopleArray => ({...peopleData, peopleArray}));

export const fetchSpecies = person =>
  fetch(person.species)
    .then(response => response.json())
    .then(wrangleSpeciesData)
    .then(speciesData => ({...person, ...speciesData}));