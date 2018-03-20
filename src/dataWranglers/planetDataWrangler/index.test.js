import planetDataWrangler from './index';
import mockPlanetFetchResponse from '../../__mocks__/mockPlanetFetchResponse';

it('should return an object with homeworld and population data', () => {
  const expected = {
    homeworld: 'Alderaan',
    population: "2000000000"
  };
  expect(planetDataWrangler(mockPlanetFetchResponse)).toEqual(expected);
});