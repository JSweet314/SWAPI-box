import fetchSpeciesData from './fetchSpeciesData';
import {mockPeopleData} from '../__mocks__/mockPeopleData';
import categoryDataWrangler from '../dataWranglers/categoryDataWrangler';

describe('fetchSpeciesData', () => {
  const mockData = categoryDataWrangler(mockPeopleData, 'people');
  /* eslint-disable no-undef */
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
  /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockData)
    }
  ));

  it('calls fetch with the correct params', () => {
    console.log(mockData);
    const expected = "https://swapi.co/api/species/1/";
    fetchSpeciesData(mockData);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  // it('should return person data with the species added', () => {
  //   const expected = [{
  //     name: 'Luke Skywalker',
  //     homeworld: "https://swapi.co/api/planets/1/",
  //     species: 'human'
  //   }];
    
  //   expect(fetchSpeciesData(mockData)).resolves.toEqual(expected);
  // });
});