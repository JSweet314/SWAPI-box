import React from 'react';
import './ScrollingText.css';
import PropTypes from 'prop-types';

const ScrollingText = ({openingCrawl, movieTitle, releaseDate}) => {
  return (
    <aside className="scrolling-text">
      <p>{openingCrawl}</p>
      <p>{movieTitle}</p>
      <p>{releaseDate}</p>
    </aside>
  );
};

ScrollingText.propTypes = {
  openingCrawl: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default ScrollingText;