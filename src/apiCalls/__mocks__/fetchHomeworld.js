/* eslint-disable no-undef */
export const fetchHomeworld = jest.fn().mockImplementation(() =>
  Promise.resolve({
    "name": "Luke Skywalker",
    "homeworld": "Tatooine",
    "population": "200000",
    species: "https://swapi.co/api/species/1/"
  }));