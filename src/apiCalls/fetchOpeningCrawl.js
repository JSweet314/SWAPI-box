export const fetchOpeningCrawl = (randomNumber) => {
  return fetch(`https://swapi.co/api/films/${randomNumber}/?format=json`)
    .then(response => response.json())
    .then(wrangleOpeningCrawlData);
};

export const wrangleOpeningCrawlData = movieData => {
  if (!movieData) return;
  const openingCrawl = movieData.opening_crawl;
  const releaseDate = movieData.release_date;
  const title = movieData.title;
  return { openingCrawl, title, releaseDate };
};