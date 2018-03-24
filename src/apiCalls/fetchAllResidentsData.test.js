import { fetchAllResidentsData } from './fetchAllResidentsData';
import {assignResidentsToPlanets} from './assignResidentsToPlanets';
import { mockSinglePersonData } from '../mockData/mockSinglePersonData';
/*eslint-disable no-undef*/
jest.mock('./assignResidentsToPlanets');
describe('fetchAllResidentsData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockSinglePersonData)
    }
  ));
  const mockArgument = {
    next: "https://swapi.co/api/people/?page=2&format=json",
    previous: null,
    planetsArray: [{
      name: "Alderaan",
      Climate: "temperate",
      population: "2000000000",
      Terrain: "grasslands, mountains",
      residents: ["https://swapi.co/api/people/1/"]
    }]
  };

  it('should call fetchName for every person in an objects peopleArray',
    () => {
      fetchAllResidentsData(mockArgument);
      expect(assignResidentsToPlanets).toHaveBeenCalledTimes(1);
    });
});