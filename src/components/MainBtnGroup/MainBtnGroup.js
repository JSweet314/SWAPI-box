import React from 'react';
import './MainBtnGroup.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const MainBtnGroup  = ({selectCategory, currentCategory}) => {
  const buttonTexts = ['people', 'planets', 'vehicles'];
  
  const handleOnClick = (event) => {
    const selectedButton = event.target.name;
    selectCategory(selectedButton);
  };

  const buttons = buttonTexts.map((text, index) => {
    const isSelected = text === currentCategory ? 'selected': '';
    return (
      <Button 
        isSelected={isSelected}
        btnText={text} 
        key={index} 
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <div className="mainBtnGroup">
      {buttons}
    </div>
  );
};

MainBtnGroup.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired
};

export default MainBtnGroup;