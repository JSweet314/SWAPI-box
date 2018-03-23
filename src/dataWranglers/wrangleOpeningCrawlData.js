export const wrangleOpeningCrawlData = movieData => {
  const openingCrawl = movieData.opening_crawl;
  const releaseDate = movieData.release_date;
  const { title } = movieData;
  return { openingCrawl, title, releaseDate };
};