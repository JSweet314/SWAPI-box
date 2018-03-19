const scrollingTextDataWrangler = (movieData) => {
  if (!movieData) return;
  const openingCrawlParagraphs = movieData.opening_crawl.split('\r\n\r\n')
    .map(paragraph => paragraph.split('\r\n'));
  const releaseDate = movieData.release_date;
  const title = movieData.title;
  
  return { openingCrawlParagraphs, title, releaseDate };
};

export default scrollingTextDataWrangler;