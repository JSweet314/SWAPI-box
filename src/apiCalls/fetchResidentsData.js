const fetchName = resident => 
  fetch(resident)
    .then(response => response.json())
    .then(residentData => residentData.name);

const assignResidentsToPlanets = planet => 
  Promise.all(planet.residents.map(fetchName))
    .then(residents => ({ ...planet, residents }));
    
const fetchResidentsData = planetsArray => 
  Promise.all(planetsArray.map(assignResidentsToPlanets));

export default fetchResidentsData;