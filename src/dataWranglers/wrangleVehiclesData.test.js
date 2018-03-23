import {wrangleVehiclesData} from './wrangleVehiclesData';
import {mockVehiclesData as mockData} from '../mockData/mockVehiclesData';

describe('wrangleVehiclesData', () => {
  it('should take in vehicles data and return a clean object', () => {
    const expected = { 
      "next": "https://swapi.co/api/vehicles/?format=json&page=2",
      "previous": null, 
      "vehiclesArray": [{ 
        "model": "Digger Crawler",
        "name": "Sand Crawler", 
        "numberOfPassengers": "30",
        "vehicleClass": "wheeled" 
      }] 
    };
    expect(wrangleVehiclesData(mockData)).toEqual(expected);
  });
});