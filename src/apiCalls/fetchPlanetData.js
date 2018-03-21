const fetchPlanetData = (peopleData) => {
  const promises = peopleData.map(person => fetch(person.homeworld)
    .then(response => response.json())
    .then(planetData => 
      ({homeworld: planetData.name, population: planetData.population})
    )  
    .then(planetData => ({...person, ...planetData}))
  );
  return Promise.all(promises);
};

export default fetchPlanetData;