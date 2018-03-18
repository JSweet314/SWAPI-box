const scrollingTextDataWrangler = (movieData) => {
  const openingCrawlParagraphs = movieData.opening_crawl.split('\r\n\r\n');
  const releaseDate = movieData.release_date;
  const title = movieData.title;

  return {openingCrawlParagraphs, title, releaseDate};
};

export default scrollingTextDataWrangler;