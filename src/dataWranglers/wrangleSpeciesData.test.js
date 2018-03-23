import {wrangleSpeciesData} from './wrangleSpeciesData';
import {mockSpeciesData as mockData} from
  '../mockData/mockSpeciesData';

describe('wrangleSpeciesData', () => {
  it('should take in species data and return an object with just the name', 
    () => {
      const expected = {species: "Human"};
      expect(wrangleSpeciesData(mockData)).toEqual(expected);  
    }
  );
});