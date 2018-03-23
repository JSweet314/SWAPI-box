import {fetchOpeningCrawl} from './fetchOpeningCrawl';
import mockFilmFetchResponse from '../__mocks__/mockFilmFetchResponse';
import scrollingTextWrangler from '../dataWranglers/scrollingTextWrangler';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/scrollingTextWrangler/index');
describe('fetchOpeningCrawl', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockFilmFetchResponse)
    }
  ));

  it('calls fetch with the correct params', () => {
    const expected = 'https://swapi.co/api/films/1/?format=json';
    fetchOpeningCrawl(1);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should call scrollingTextWrangler with correct params', () => {
    fetchOpeningCrawl(1);
    expect(scrollingTextWrangler).toHaveBeenCalledWith(mockFilmFetchResponse);
  });
});