const fetchResidentsData = planetsArray => 
  Promise.all(planetsArray.map(planet => 
    Promise.all(planet.residents.map(resident => 
      fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name)
    ))
      .then(residentsData => 
        ({ ...planet, residents: residentsData })
      )
  ));

export default fetchResidentsData;