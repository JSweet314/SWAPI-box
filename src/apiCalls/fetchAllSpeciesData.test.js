import {fetchAllSpeciesData} from './fetchAllSpeciesData';
import {fetchSpecies} from './fetchSpecies';
import {mockSpeciesData} from '../mockData/mockSpeciesData';
/*eslint-disable no-undef*/
jest.mock('./fetchSpecies');
/*eslint-enable no-undef*/
describe('fetchAllSpeciesData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockSpeciesData)
    }
  ));
  const mockArgument = {
    next: "https://swapi.co/api/people/?page=2&format=json",
    previous: null,
    peopleArray: [{
      name: "Luke Skywalker",
      homeworld: "Tatooine",
      population: "200000",
      species: "https://swapi.co/api/species/1/"
    }, {
      name: "Luke Skywalker",
      homeworld: "Tatooine",
      population: "200000",
      species: "https://swapi.co/api/species/1/"
    }]
  };
  
  it('should call fetchSpecies for every person in an objects peopleArray',
    () => {
      fetchAllSpeciesData(mockArgument);
      expect(fetchSpecies).toHaveBeenCalledTimes(2);
    });
});