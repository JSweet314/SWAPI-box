import fetchCategoryData from './fetchCategoryData';
import mockCategoryFetchResponse from '../__mocks__/mockCategoryFetchResponse';
import categoryDataWrangler from '../dataWranglers/categoryDataWrangler/index';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/categoryDataWrangler/index');
describe('fetchCategoryData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockCategoryFetchResponse)
    }
  ));

  it('calls fetch with the correct params', () => {
    const expected = 'https://swapi.co/api/planets/?format=json&page=1';
    fetchCategoryData('planets', 1);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should call categoryDataWrangler with correct params', () => {
    fetchCategoryData('planets', 1);
    expect(categoryDataWrangler).toHaveBeenCalledWith(
      mockCategoryFetchResponse, 'planets'
    );
  });
});