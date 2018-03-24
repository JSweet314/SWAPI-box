/* eslint-disable no-undef */
export const wranglePlanetsData = jest.fn().mockImplementation(() => 
  Promise.resolve({
    next: "https://swapi.co/api/planets/?page=2&format=json",
    previous: null,
    planetsArray: [{
      name: "Alderaan",
      population: "2000000000",
      terrain: "grasslands, mountains",
      climate: "temperate",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ]
    }]
  }));
/* eslint-enable no-undef */
