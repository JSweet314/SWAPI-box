import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PageButtons = ({next, previous, handlePageButtonClick}) => {
  if (!previous) {
    return (
      <div className="page-buttons page-buttons--beginning">
        <button 
          name="next"
          onClick={(event) => handlePageButtonClick(event)}>
          Next
        </button>
      </div>
    );
  }

  if (!next) {
    return (
      <div className="page-buttons page-buttons--beginning">
        <button
          name="previous"
          onClick={(event) => handlePageButtonClick(event)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="page-buttons">
      <button
        name="previous"
        onClick={event => handlePageButtonClick(event)}>
        Back
      </button>
      <button
        name="next"
        onClick={event => handlePageButtonClick(event)}>
        Next
      </button>
    </div>
  );
};

PageButtons.propTypes = {
  next: PropTypes.string,
  previous: PropTypes.string,
  handlePageButtonClick: PropTypes.func.isRequired
};

export default PageButtons;