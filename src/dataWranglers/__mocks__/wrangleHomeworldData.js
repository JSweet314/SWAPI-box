/* eslint-disable no-undef */
export const wrangleHomeworldData = jest.fn().mockImplementation(() =>
  Promise.resolve({homeworld: "Alderaan", population: "2000000000"}));
/* eslint-enable no-undef */