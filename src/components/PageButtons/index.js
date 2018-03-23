import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PageButtons = ({pageNumber}) => {
  if (pageNumber === 1) {
    return (
      <div className="page-buttons page-buttons--beginning">
        <button>Next</button>
      </div>
    );
  }

  return (
    <div className="page-buttons">
      <button>Back</button>
      <button>Next</button>
    </div>
  );
};

PageButtons.propTypes = {
  pageNumber: PropTypes.number.isRequired
};

export default PageButtons;