import { fetchPlanetsData } from './fetchPlanetsData';
import mockPlanetsData from '../mockData/mockPlanetsData';
import { wranglePlanetsData } from
  '../dataWranglers/wranglePlanetsData';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/wranglePlanetsData');
describe('fetchPlanetsData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockPlanetsData)
    }
  ));

  it('calls fetch with the correct params', () => {
    fetchPlanetsData();
    expect(window.fetch).toHaveBeenCalledWith(
      "https://swapi.co/api/planets/?format=json&page=1"
    );
    fetchPlanetsData('www.google.com');
    expect(window.fetch).toHaveBeenCalledWith('www.google.com');
  });

  it('calls wranglePlanetsData after fetching', () => {
    fetchPlanetsData();
    expect(wranglePlanetsData).toHaveBeenCalledWith(mockPlanetsData);
  });

  it('returns an object of clean planets data', () => {
    const expected = { 
      "next": "https://swapi.co/api/planets/?page=2&format=json",
      "previous": null,
      "planetsArray": [{ 
        "climate": "temperate",
        "name": "Alderaan",
        "population": "2000000000",
        "residents": [
          "https://swapi.co/api/people/5/",
          "https://swapi.co/api/people/68/",
          "https://swapi.co/api/people/81/"
        ], 
        "terrain": "grasslands, mountains"
      }]
    };
    expect(fetchPlanetsData()).resolves.toEqual(expected);
  });
});