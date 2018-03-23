export const fetchVehiclesData = () => 
  fetch("https://swapi.co/api/vehicles/?format=json&page=1")
    .then(response => response.json())
    .then(wrangleVehiclesData);

export const wrangleVehiclesData = vehicleData => {
  const vehiclesArray = vehicleData.results.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    vehicleClass: vehicle.vehicle_class,
    numberOfPassengers: vehicle.passengers
  }));
  return {
    next: vehicleData.next,
    previous: vehicleData.previous,
    vehiclesArray
  };
};