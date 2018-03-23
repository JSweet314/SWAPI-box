import {wrangleResidentData} from '../dataWranglers/wrangleResidentData';

export const fetchAllResidentsData = planetsData => 
  Promise.all(planetsData.planetsArray.map(assignResidentsToPlanets))
    .then(planetsArray => ({...planetsData, planetsArray}));
       
export const assignResidentsToPlanets = planet => 
  Promise.all(planet.residents.map(fetchName))
    .then(residents => ({...planet, residents}));

export const fetchName = resident => 
  fetch(resident)
    .then(response => response.json())
    .then(wrangleResidentData);
