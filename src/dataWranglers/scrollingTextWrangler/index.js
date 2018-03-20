const scrollingTextDataWrangler = (movieData) => {
  if (!movieData) return;
  const openingCrawl = movieData.opening_crawl;
  const releaseDate = movieData.release_date;
  const title = movieData.title;
  return { openingCrawl, title, releaseDate };
};

export default scrollingTextDataWrangler;