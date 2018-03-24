import {fetchName} from './fetchName';

export const fetchAllResidentsData = planetsData => 
  Promise.all(planetsData.planetsArray.map(assignResidentsToPlanets))
    .then(planetsArray => ({...planetsData, planetsArray}));
       
export const assignResidentsToPlanets = planet => 
  Promise.all(planet.residents.map(fetchName))
    .then(residents => ({...planet, residents}));


