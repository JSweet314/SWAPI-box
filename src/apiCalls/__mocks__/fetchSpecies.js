/* eslint-disable no-undef */
export const fetchSpecies = jest.fn().mockImplementation(() => 
  Promise.resolve({
    name: "Luke Skywalker",
    homeworld: "Tatooine",
    population: "200000",
    species: "Human"
  }));