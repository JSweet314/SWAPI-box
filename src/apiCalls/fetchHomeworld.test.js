import {fetchHomeworld} from './fetchHomeworld';
import {wrangleHomeworldData} from '../dataWranglers/wrangleHomeworldData';
import {mockSinglePlanetData} from '../mockData/mockSinglePlanetData';
/*eslint-disable no-undef*/
jest.mock('../dataWranglers/wrangleHomeworldData');
describe('fetchHomeworld', () => {
  window.fetch = jest.fn().mockImplementation(() =>{
    /* eslint-enable no-undef */
    return Promise.resolve(
      {
        ok: true,
        json: () => Promise.resolve(mockSinglePlanetData)
      }
    );
  });
  const mockArgument = {
    name: "Luke Skywalker",
    homeworld: "https://swapi.co/api/planets/2/",
    species: "https://swapi.co/api/species/?format=json&page=1"
  };
  it('should call fetch with correct parameter', () => {
    fetchHomeworld(mockArgument);
    expect(window.fetch)
      .toHaveBeenCalledWith("https://swapi.co/api/planets/2/");
  });

  it('should call wrangleHomeworldData after fetching', () => {
    fetchHomeworld(mockArgument);
    expect(wrangleHomeworldData).toHaveBeenCalled();
  });

  it('should return the original object with homeworld data added', () => {
    const expected = {
      "homeworld": "Alderaan",
      "name": "Luke Skywalker", 
      "population": "2000000000",
      "species": "https://swapi.co/api/species/?format=json&page=1"
    };
    expect(fetchHomeworld(mockArgument)).resolves.toEqual(expected);
  });
});