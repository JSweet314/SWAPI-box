import {wrangleHomeworldData} from './wrangleHomeworldData';
import {mockSinglePlanetData as mockData} from 
  '../mockData/mockSinglePlanetData';

describe('wrangleHomeworldData', () => {
  it('should take in a planets data and return name and population', () => {
    const expected = { 
      homeworld: "Alderaan", 
      population: "2000000000" 
    };
    expect(wrangleHomeworldData(mockData)).toEqual(expected);
  });
});