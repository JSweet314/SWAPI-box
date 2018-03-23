import {fetchAllSpeciesData} from './fetchAllSpeciesData';
import {mockPeopleData} from '../mockData/mockPeopleData';
import categoryDataWrangler from '../dataWranglers/categoryDataWrangler';

describe('fetchAllSpeciesData', () => {
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
    const expected = "https://swapi.co/api/species/1/";
    fetchAllSpeciesData(mockData);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  // it('should return person data with the species added', () => {
  //   const expected = [{
  //     name: 'Luke Skywalker',
  //     homeworld: "https://swapi.co/api/planets/1/",
  //     species: 'human'
  //   }];
    
  //   expect(fetchAllSpeciesData(mockData)).resolves.toEqual(expected);
  // });
});