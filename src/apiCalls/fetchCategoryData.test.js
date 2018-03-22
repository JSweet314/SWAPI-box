import fetchCategoryData from './fetchCategoryData';
import mockPlanetFetchReponse from '../__mocks__/mockPlanetFetchResponse';
import categoryDataWrangler from '../dataWranglers/categoryDataWrangler/index';

describe('fetchCategoryData', () => {
  let mockCategoryResponse;
  beforeEach(() => {
    mockCategoryResponse = JSON.parse(mockPlanetFetchReponse);
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCategoryResponse)
    }).then(categoryData => categoryDataWrangler(categoryData, 'planets')));
  });

  it('calls fetch with the correct params', () => {
    const expected = 'https://swapi.co/api/planets/?format=json&page=1';
    fetchCategoryData('planets', 1);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('returns an array of category data if response is ok', () => {
    const expected = categoryDataWrangler(mockCategoryResponse, 'planets');
    Promise.resolve(expect(fetchCategoryData('planets', 1)).toEqual(expected));
  });

  it('calls the categoryDataWrangler with correct params', () => {

  });
});