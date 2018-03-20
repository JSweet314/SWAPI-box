import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({btnText, selectCategory, isSelected}) => {
  return (
    <button 
      name={btnText}
      onClick={event => selectCategory(event)}
      className={`button ${isSelected}`}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
  isSelected: PropTypes.string.isRequired
};

export default Button;