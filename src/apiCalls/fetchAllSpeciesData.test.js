import {fetchAllSpeciesData} from './fetchAllSpeciesData';
import {mockPeopleData} from '../mockData/mockPeopleData';
import {wranglePeopleData} from '../dataWranglers/wranglePeopleData';
import { wrangleSpeciesData } from '../dataWranglers/wrangleSpeciesData';
/* eslint-disable no-undef */
jest.mock('../dataWranglers/wrangleSpeciesData');
describe('fetchAllSpeciesData', () => {
  const mockData = wranglePeopleData(mockPeopleData, 'people');
  // mockData.peopleArray[0].species = "human";
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

  it('should wrangle species data', () => {
    fetchAllSpeciesData(mockData);
    expect(wrangleSpeciesData).toHaveBeenCalled();
  });

  it('should return person data with the species added', () => {
    // const expected = { 
    //   "next": "https://swapi.co/api/people/?page=2&format=json",
    //   "previous": null,
    //   "peopleArray": [{ 
    //     "homeworld": "https://swapi.co/api/planets/1/", 
    //     "name": "Luke Skywalker",
    //     "species": "human" 
    //   }]
    // };
    // expect(fetchAllSpeciesData(mockData)).resolves.toEqual(expected);
  });
});