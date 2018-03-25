/* eslint-disable no-undef */
export const assignResidentsToPlanets = jest.fn().mockImplementation(() =>
/* eslint-enable no-undef */
  Promise.resolve({
    "Climate": "temperate", 
    "Terrain": "grasslands, mountains",
    "name": "Alderaan",
    "population": "2000000000",
    "residents": ["Luke Skywalker"]
  }));
