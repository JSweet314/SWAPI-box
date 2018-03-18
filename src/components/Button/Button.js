import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({btnText}) => {
  return (
    <button className="button">
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired
};

export default Button;