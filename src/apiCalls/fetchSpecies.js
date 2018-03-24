import { wrangleSpeciesData } from '../dataWranglers/wrangleSpeciesData';

export const fetchSpecies = person =>
  fetch(person.species)
    .then(response => response.json())
    .then(wrangleSpeciesData)
    .then(speciesData => ({ ...person, ...speciesData }));