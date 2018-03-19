import React from 'react';
import './Main.css';
import MainBtnGroup from '../MainBtnGroup/MainBtnGroup';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import PropTypes from 'prop-types';

const Main = ({ currentCategory, selectCategory }) => {
  return (
    <main className="main">
      <MainBtnGroup 
        currentCategory={currentCategory}
        selectCategory={selectCategory} />
      <CategoryDisplay />
    </main>
  );
};

Main.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired
};

export default Main;