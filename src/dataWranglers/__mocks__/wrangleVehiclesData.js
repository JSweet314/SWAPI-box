/* eslint-disable no-undef */
export const wrangleVehiclesData = jest.fn().mockImplementation(() => 
  Promise.resolve({
    next: "https://swapi.co/api/vehicles/?format=json&page=2",
    previous: null,
    vehiclesArray: [{
      name: "Sand Crawler",
      model: "Digger Crawler",
      vehicleClass: "wheeled",
      numberOfPassengers: "30"
    }]
  }));
/* eslint-enable no-undef */
