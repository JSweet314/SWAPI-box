/* eslint-disable no-undef */
export const wranglePeopleData = jest.fn().mockImplementation(() => 
  Promise.resolve({
    next: "https://swapi.co/api/people/?page=2&format=json",
    previous: null,
    peopleArray: [{
      "name": "Luke Skywalker",
      "homeworld": "https://swapi.co/api/planets/1/",
      species: "https://swapi.co/api/species/1/"
    }]
  }));
/* eslint-enable no-undef */
