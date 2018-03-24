import {fetchHomeworld} from './fetchHomeworld';

export const fetchAllHomeworldData = peopleData => 
  Promise.all(peopleData.peopleArray.map(fetchHomeworld))
    .then(peopleArray => ({...peopleData, peopleArray}));