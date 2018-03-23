import {wranglePlanetsData} from './wranglePlanetsData';
import {mockPlanetsData as mockData} from 
  '../mockData/mockPlanetsData';

describe('wranglePlanetData', () => {
  it('should take in planet data and return an object', () => {
    const expected = {
      next: "https://swapi.co/api/planets/?page=2&format=json",
      previous: null,
      planetsArray: [{
        name: "Alderaan",
        terrain: "grasslands, mountains",
        population: "2000000000",
        climate: "temperate",
        residents: [
          "https://swapi.co/api/people/5/",
          "https://swapi.co/api/people/68/",
          "https://swapi.co/api/people/81/"
        ]
      }]
    };
    expect(wranglePlanetsData(mockData)).toEqual(expected);
  });
});