const categoryDataWrangler = (categoryData, category) => {
  switch (category) {
  case 'people':    
    return {
      category: category,
      response: categoryData.results.map(person => {
        return {
          name: person.name,
          homeworld: person.homeworld, // url
          species: person.species[0], // url
          population: person.homeworld
        };
      })
    };
  case 'planets':
    return {
      category: category,
      response: categoryData.results.map(planet => {
        return {
          name: planet.name,
          terrain: planet.terrain,
          populateion: planet.population,
          climate: planet.climate,
          residents: planet.residents // array of urls
        };
      })
    };
  case 'vehicles':
    return {
      category: category,
      response: categoryData.results.map(vehicle => {
        return {
          name: vehicle.name,
          model: vehicle.model,
          class: vehicle.vehicle_class,
          numberOfPassengers: vehicle.passengers
        };
      })
    };
  default:
    return null;
  }
};

export default categoryDataWrangler;