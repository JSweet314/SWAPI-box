import React from 'react';
import './OpeningCrawlParagraph.css'
import PropTypes from 'prop-types';

const OpeningCrawlParagraph = ({paragraph}) => {
  const lines = paragraph.split('\r\n').map((line, index) => {
    return <span className="crawl-line" key={index}>{line}</span>
  })
  return (
    <p>
      {lines}
    </p>
  );
};

OpeningCrawlParagraph.propTypes = {
  paragraph: PropTypes.string
}

export default OpeningCrawlParagraph;