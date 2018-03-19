import React, { Component } from 'react';
import './CategoryDisplay.css';
import PropTypes from 'prop-types';

const CategoryDisplay = ({ categoryResponse, currentCategory }) => {
  let response;
  if (!categoryResponse.length) {
    response = (
      <p className="category-display__default-text">Select A Category</p>
    );
  } else {
    response = categoryResponse.map(card => {
      return <article key={card.name}>{card.name}</article>;
    });
  }
  
  return (
    <div className="category-display">
      <h2>{currentCategory}</h2>
      {response}
    </div>
  );
};

CategoryDisplay.propTypes = {
  categoryResponse: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired
};

export default CategoryDisplay;