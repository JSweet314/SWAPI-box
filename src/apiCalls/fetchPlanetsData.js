export const fetchPlanetsData = () => 
  fetch("https://swapi.co/api/planets/?format=json&page=1")
    .then(response => response.json())
    .then(wranglePlanetData);

export const wranglePlanetData = planetsData => {
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