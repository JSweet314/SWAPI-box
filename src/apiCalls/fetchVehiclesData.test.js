import { fetchVehiclesData } from './fetchVehiclesData';
import mockVehiclesData from '../mockData/mockVehiclesData';
import { wrangleVehiclesData } from
  '../dataWranglers/wrangleVehiclesData';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/wrangleVehiclesData');
describe('fetchVehiclesData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockVehiclesData)
    }
  ));

  it('calls fetch with the correct params', () => {
    fetchVehiclesData();
    expect(window.fetch).toHaveBeenCalledWith(
      "https://swapi.co/api/vehicles/?format=json&page=1"
    );
    fetchVehiclesData('www.google.com');
    expect(window.fetch).toHaveBeenCalledWith('www.google.com');
  });

  it('calls wrangleVehiclesData after fetching', () => {
    fetchVehiclesData();
    expect(wrangleVehiclesData).toHaveBeenCalled();
  });

  it('returns an object of clean vehicles data', () => {
    const expected = {
      next: "https://swapi.co/api/vehicles/?format=json&page=2",
      previous: null,
      vehiclesArray: [{
        name: "Sand Crawler",
        model: "Digger Crawler",
        vehicleClass: "wheeled",
        numberOfPassengers: "30"
      }]
    };
    expect(fetchVehiclesData()).resolves.toEqual(expected);
  });
});