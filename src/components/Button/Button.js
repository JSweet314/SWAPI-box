import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({btnText, handleOnClick, isSelected}) => {
  return (
    <button 
      name={btnText}
      onClick={event => handleOnClick(event)}
      className={`button ${isSelected}`}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  isSelected: PropTypes.string.isRequired
};

export default Button;