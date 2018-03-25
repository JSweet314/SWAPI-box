import {fetchOpeningCrawl} from './fetchOpeningCrawl';
import mockFilmFetchResponse from '../mockData/mockFilmFetchResponse';
import {wrangleOpeningCrawlData} from 
  '../dataWranglers/wrangleOpeningCrawlData';

/* eslint-disable no-undef */
jest.mock('../dataWranglers/wrangleOpeningCrawlData');
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

  it('should call wrangleOpeningCrawlData with correct params', () => {
    fetchOpeningCrawl(1);
    expect(wrangleOpeningCrawlData).toHaveBeenCalledWith(mockFilmFetchResponse);
  });

  it('returns an object of opening crawl data', () => {
    const expected = {
      openingCrawl: "I am placeholder text!",
      title: "A StarWars Movie",
      releaseDate: "2018-03-23"
    };
    expect(fetchOpeningCrawl(1)).resolves.toEqual(expected)
  });
});