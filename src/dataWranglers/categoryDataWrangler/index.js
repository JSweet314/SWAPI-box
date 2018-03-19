const categoryDataWrangler = (categoryData, category) => {
  switch (category) {
  case 'people':    
    return categoryData.results.map(person => {
      return {
        name: person.name,
        homeworld: person.homeworld, // url
        species: person.species[0] // url
      };
    });
  case 'planets':
    return categoryData.results.map(planet => {
      return {
        name: planet.name,
        terrain: planet.terrain,
        populateion: planet.population,
        climate: planet.climate,
        residents: planet.residents
      };
    });
  case 'vehicles':
    return categoryData.results.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        numberOfPassengers: vehicle.passengers
      };
    });
  default:
    return null;
  }
};

export default categoryDataWrangler;