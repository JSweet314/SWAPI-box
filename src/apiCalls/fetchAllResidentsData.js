export const fetchName = resident => 
  fetch(resident)
    .then(response => response.json())
    .then(residentData => residentData.name);

export const assignResidentsToPlanets = planet => 
  Promise.all(planet.residents.map(fetchName))
    .then(residents => ({ ...planet, residents }));
    
export const fetchAllResidentsData = planetsData => 
  Promise.all(planetsData.planetsArray.map(assignResidentsToPlanets))
    .then(planetsArray => ({...planetsData, planetsArray}));