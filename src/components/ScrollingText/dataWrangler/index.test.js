import scrollingTextDataWrangler from './index';
import mockFilmFetchResponse from '../__mocks__/mockFilmFetchResponse';

describe('scrollingTextDataWrangler', () => {
  it('should be a function', () => {
    expect(scrollingTextDataWrangler).toBeDefined();
  });

  it('should return undefined if no movie data is provided', () => {
    const result = scrollingTextDataWrangler();
    expect(result).toEqual(undefined);
  });

  it('should return an array of arrays of opening crawl lines', () => {
    const result = scrollingTextDataWrangler(mockFilmFetchResponse);
    expect(result.openingCrawl).toEqual(
      /* eslint-disable max-len*/
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
      /* eslint-enable max-len */
    );
  });

  it('should return a string with the title', () => {
    const result = scrollingTextDataWrangler(mockFilmFetchResponse);
    expect(result.title).toEqual("A New Hope");
  });

  it('should return a string with the release date', () => {
    const result = scrollingTextDataWrangler(mockFilmFetchResponse);
    expect(result.releaseDate).toEqual("1977-05-25");
  });
});