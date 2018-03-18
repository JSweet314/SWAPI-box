import React from 'react';
import './ScrollingText.css';
import PropTypes from 'prop-types';

const ScrollingText = ({openingCrawl, movieTitle, releaseDate}) => {
  const openingCrawlParagraphs = openingCrawl.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  });

  return (
    <aside className="scrolling-text">
      {openingCrawlParagraphs}
      <p>{movieTitle}</p>
      <p>{releaseDate}</p>
    </aside>
  );
};

ScrollingText.propTypes = {
  openingCrawl: PropTypes.array.isRequired,
  movieTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default ScrollingText;