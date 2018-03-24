import {fetchSpecies} from './fetchSpecies';
import mockSpeciesData from '../mockData/mockSpeciesData';
import { wrangleSpeciesData } from
  '../dataWranglers/wrangleSpeciesData';
import { mockWrangledSinglePersonData } from 
  '../mockData/mockWrangledSinglePersonData';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/wrangleSpeciesData');
describe('fetchSpecies', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve(
    /* eslint-enable no-undef */
      {
        ok: true,
        json: () => Promise.resolve(mockSpeciesData)
      }
    );
  });

  it('calls fetch with the correct params', () => {
    fetchSpecies(mockWrangledSinglePersonData);
    expect(window.fetch).toHaveBeenCalledWith(
      "https://swapi.co/api/species/?format=json&page=1"
    );
  });

  it('calls wrangleSpeciesData after fetching', () => {
    fetchSpecies(mockWrangledSinglePersonData);
    expect(wrangleSpeciesData).toHaveBeenCalled();
  });

  it('assigns new species data to the person data', () => {
    const expected = { 
      "homeworld": "Tatooine",
      "name": "Luke Skywalker",
      "population": "200000",
      "species": "human" 
    };
    expect(fetchSpecies(mockWrangledSinglePersonData)).resolves
      .toEqual(expected);
  });
});