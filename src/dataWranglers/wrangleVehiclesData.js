export const wrangleVehiclesData = vehicleData => {
  const vehiclesArray = vehicleData.results.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    vehicleClass: vehicle.vehicle_class,
    numberOfPassengers: vehicle.passengers
  }));
  return {
    next: vehicleData.next || null,
    previous: vehicleData.previous || null,
    vehiclesArray
  };
};