import {assignResidentsToPlanets} from './assignResidentsToPlanets';
import {fetchName} from './fetchName';
import {mockSinglePersonData} from '../mockData/mockSinglePersonData';

/*eslint-disable no-undef*/
jest.mock('./fetchName');

describe('assignResidentsToPlanets', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    /* eslint-enable no-undef */
    Promise.resolve(
      {
        ok: true,
        json: () => Promise.resolve(mockSinglePersonData)
      }
    )
  );

  const mockArgument = {
    name: "Alderaan",
    Climate: "temperate",
    population: "2000000000",
    Terrain: "grasslands, mountains",
    residents: [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/1/"
    ]
  };

  it('should call fetchName for every resident of a planet', () => {
    assignResidentsToPlanets(mockArgument);
    expect(fetchName).toHaveBeenCalledTimes(3);
  });

  it('should assign residents data to planets', () => {
    const expected = {
      name: "Alderaan",
      Climate: "temperate",
      population: "2000000000",
      Terrain: "grasslands, mountains",
      residents: ["Luke Skywalker", "Luke Skywalker", "Luke Skywalker"]
    };
    expect(assignResidentsToPlanets(mockArgument)).resolves.toEqual(expected);
  });
});