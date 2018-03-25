import { fetchName } from './fetchName';
import {mockSinglePersonData} from '../mockData/mockSinglePersonData';
import { wrangleResidentData } from
  '../dataWranglers/wrangleResidentData';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/wrangleResidentData');
describe('fetchName', () => {
  window.fetch = jest.fn().mockImplementation(() => 
  /* eslint-enable no-undef */
    Promise.resolve(
      {
        ok: true,
        json: () => Promise.resolve(mockSinglePersonData)
      }
    ));

  it('calls fetch with the correct params', () => {
    fetchName("https://swapi.co/api/people/1/");
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/1/");
  });

  it('calls wrangleResidentData with right params after fetching', () => {
    fetchName("https://swapi.co/api/people/1/");
    expect(wrangleResidentData).toHaveBeenCalledWith(mockSinglePersonData);
  });

  it('returns a string with the residents name', () => {
    expect(fetchName("https://swapi.co/api/people/1/")).resolves.toEqual("Luke Skywalker");
  });
});