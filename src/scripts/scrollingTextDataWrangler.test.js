import scrollingTextDataWrangler from './scrollingTextDataWrangler';
import { mockFilmFetchResponse } from '../setupTests';

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
    expect(result.openingCrawlParagraphs).toEqual([
      [
        "It is a period of civil war.",
        "Rebel spaceships, striking",
        "from a hidden base, have won",
        "their first victory against",
        "the evil Galactic Empire."
      ],
      [
        "During the battle, Rebel",
        "spies managed to steal secret",
        "plans to the Empire's",
        "ultimate weapon, the DEATH",
        "STAR, an armored space",
        "station with enough power",
        "to destroy an entire planet."
      ],
      [
        "Pursued by the Empire's",
        "sinister agents, Princess",
        "Leia races home aboard her",
        "starship, custodian of the",
        "stolen plans that can save her",
        "people and restore",
        "freedom to the galaxy...."
      ]
    ]);
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