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
      populateion: planet.population,
      climate: planet.climate,
      residents: planet.residents // array of urls
    }));
  case 'vehicles':
    return categoryData.results.map(vehicle => ({
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      numberOfPassengers: vehicle.passengers
    }));
  default:
    return null;
  }
};

export default categoryDataWrangler;