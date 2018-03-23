import {wranglePeopleData} from './wranglePeopleData';
import {mockPeopleData as mockData} from '../mockData/mockPeopleData';

describe('wranglePeopleData', () => {
  it('should take in people data and return an object', () => {
    const expected = {
      next: "https://swapi.co/api/people/?page=2&format=json",
      previous: null,
      peopleArray: [{ 
        name: "Luke Skywalker",
        species: "https://swapi.co/api/species/1/",
        homeworld: "https://swapi.co/api/planets/1/"
      }]
    };
    expect(wranglePeopleData(mockData)).toEqual(expected);
  });
});