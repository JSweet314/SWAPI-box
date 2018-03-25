/* eslint-disable no-undef */
export const wrangleOpeningCrawlData = jest.fn().mockImplementation(() => 
  Promise.resolve({
    openingCrawl: "I am placeholder text!",
    title: "A StarWars Movie",
    releaseDate: "2018-03-23"
  }));
/* eslint-enable no-undef */
