export const fetchPlanetsData = (url) => {
  const address = url || "https://swapi.co/api/planets/?format=json&page=1";
  return fetch(address)
    .then(response => response.json())
    .then(wranglePlanetsData);
};

export const wranglePlanetsData = planetsData => {
  const planetsArray = planetsData.results.map(planet => ({
    name: planet.name,
    terrain: planet.terrain,
    population: planet.population,
    climate: planet.climate,
    residents: planet.residents
  }));
  return {
    next: planetsData.next,
    previous: planetsData.previous,
    planetsArray
  };
};