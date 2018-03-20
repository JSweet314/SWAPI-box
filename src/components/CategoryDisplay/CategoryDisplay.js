import React from 'react';
import './CategoryDisplay.css';
import PropTypes from 'prop-types';
import loadingGIF from '../../images/Loading_icon.gif';
import InfoCard from '../InfoCard/index';

const CategoryDisplay = ({ categoryData, currentCategory, loading }) => {  
  if (loading) {
    return (
      <div className="category-display category-display--loading">
        <img src={loadingGIF} alt="loading" />
      </div>
    );
  }

  if (!categoryData.response) {
    return (
      <div className="category-display category-display--default">
        <p className="category-display__default-text">Select A Category</p>
      </div>
    );
  } 
  
  const response = categoryData.response.map(card => {
    return <InfoCard key={card.name} card={card} />;
  });

  return (
    <div className="category-display">
      <h2>{currentCategory}</h2>
      {response}
    </div>
  );
};

CategoryDisplay.propTypes = {
  categoryData: PropTypes.object.isRequired,
  currentCategory: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default CategoryDisplay;