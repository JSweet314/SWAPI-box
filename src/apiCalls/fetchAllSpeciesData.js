import {fetchSpecies} from './fetchSpecies';

export const fetchAllSpeciesData = peopleData =>
  Promise.all(peopleData.peopleArray.map(fetchSpecies))
    .then(peopleArray => ({...peopleData, peopleArray}));
