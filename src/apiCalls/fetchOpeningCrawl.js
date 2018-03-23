import {wrangleOpeningCrawlData} from 
  '../dataWranglers/wrangleOpeningCrawlData';

export const fetchOpeningCrawl = (randomNumber) => {
  return fetch(`https://swapi.co/api/films/${randomNumber}/?format=json`)
    .then(response => response.json())
    .then(wrangleOpeningCrawlData);
};