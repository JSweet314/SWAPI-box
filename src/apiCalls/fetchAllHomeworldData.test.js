import {fetchAllHomeworldData} from './fetchAllHomeworldData';
import {fetchHomeworld} from './fetchHomeworld';
import {mockSinglePlanetData}  from '../mockData/mockSinglePlanetData';
/*eslint-disable no-undef*/
jest.mock('./fetchHomeworld');
describe("fetchAllHomeworldData", () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockSinglePlanetData)
    }
  ));
  const mockArgument = {
    next: "https://swapi.co/api/people/?page=2&format=json",
    previous: null,
    peopleArray: [{
      "name": "Luke Skywalker",
      "homeworld": "https://swapi.co/api/planets/1/",
      species: "https://swapi.co/api/species/1/"
    }]
  };

  it('should call fetchHomeworld for each person in an array of people', () => {
    fetchAllHomeworldData(mockArgument);
    expect(fetchHomeworld).toHaveBeenCalledTimes(1);
  });

  it('should return the original object with resident data added', () => {
    const expected = {
      "next": "https://swapi.co/api/people/?page=2&format=json", 
      "previous": null,
      "peopleArray": [{
        "homeworld": "Tatooine",
        "name": "Luke Skywalker",
        "population": "200000", 
        "species": "https://swapi.co/api/species/1/" 
      }]
    };
    expect(fetchAllHomeworldData(mockArgument)).resolves.toEqual(expected);
  });
});