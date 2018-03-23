import fetchHomeworldData from './fetchHomeworldData';
import {mockPeopleData} from '../__mocks__/mockPeopleData';
import mockPlanetFetchResponse from '../__mocks__/mockPlanetFetchResponse';
import categoryDataWrangler from '../dataWranglers/categoryDataWrangler/index';

describe('fetchHomeworldData', () => {
  const mockData = categoryDataWrangler(mockPeopleData, 'people');
  /* eslint-disable no-undef */
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockPlanetFetchResponse)
    }
  ));

  it('calls fetch with the correct params', () => {
    const expected = ["https://swapi.co/api/planets/1/"];
    fetchHomeworldData(mockData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an array of people data with homeworld added', () => {
    const expected = [{
      name: 'Luke Skywalker',
      homeworld: 'Alderaan',
      species: "https://swapi.co/api/species/1/",
      population: '2000000000'
    }];

    Promise.resolve(fetchHomeworldData(mockData))
      .then(result => expect(result).toEqual(expected));
  });
});