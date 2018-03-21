const categoryDataWrangler = (categoryData, category) => {
  switch (category) {
  case 'people':    
    return categoryData.results.map(person => ({ 
      name: person.name,
      species: person.species[0],
      homeworld: person.homeworld
    }));
  case 'planets':
    return categoryData.results.map(planet => ({
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }));
  case 'vehicles':
    return categoryData.results.map(vehicle => ({
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      numberOfPassengers: vehicle.passengers
    }));
  default:
    return null;
  }
};

export default categoryDataWrangler;