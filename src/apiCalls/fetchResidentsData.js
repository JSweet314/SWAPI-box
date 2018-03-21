const fetchResidentsData = (planetsArray) => {
  const newPlanetsArray = planetsArray.map(planet => {
    const promises = planet.residents.map(resident => {
      return fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name);
    });
    return Promise.all(promises).then(residentsData => 
      ({ ...planet, residents: residentsData })
    );
    
  });
  return Promise.all(newPlanetsArray);
};

export default fetchResidentsData;