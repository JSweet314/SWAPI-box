import { fetchPeopleData } from './fetchPeopleData';
import mockPeopleData from '../mockData/mockPeopleData';
import { wranglePeopleData } from
  '../dataWranglers/wranglePeopleData';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/wranglePeopleData');
describe('fetchPeopleData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockPeopleData)
    }
  ));

  it('calls fetch with the correct params', () => {
    fetchPeopleData();
    expect(window.fetch).toHaveBeenCalledWith(
      "https://swapi.co/api/people/?format=json&page=1"
    );
    fetchPeopleData('www.google.com');
    expect(window.fetch).toHaveBeenCalledWith('www.google.com');
  });

  it('calls wranglePeopleData after fetching', () => {
    fetchPeopleData();
    expect(wranglePeopleData).toHaveBeenCalledWith(mockPeopleData);
  });

  it('returns an object of clean people data', () => {
    const expected = {
      next: "https://swapi.co/api/people/?page=2&format=json",
      previous: null,
      peopleArray: [{
        "name": "Luke Skywalker",
        "homeworld": "https://swapi.co/api/planets/1/",
        species: "https://swapi.co/api/species/1/"
      }]
    };
    expect(fetchPeopleData()).resolves.toEqual(expected);
  });

});