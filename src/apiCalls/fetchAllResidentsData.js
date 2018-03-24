import { assignResidentsToPlanets } from './assignResidentsToPlanets';

export const fetchAllResidentsData = planetsData => 
  Promise.all(planetsData.planetsArray.map(assignResidentsToPlanets))
    .then(planetsArray => ({...planetsData, planetsArray}));




