export const wranglePlanetsData = planetsData => {
  const planetsArray = planetsData.results.map(planet => ({
    name: planet.name,
    terrain: planet.terrain,
    population: planet.population,
    climate: planet.climate,
    residents: planet.residents
  }));
  return {
    next: planetsData.next || null,
    previous: planetsData.previous || null,
    planetsArray
  };
};