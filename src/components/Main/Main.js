import React from 'react';
import './Main.css';
import MainBtnGroup from '../MainBtnGroup/MainBtnGroup';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import PropTypes from 'prop-types';

const Main = ({ currentCategory, selectCategory, categoryResponse }) => {
  return (
    <main className="main">
      <MainBtnGroup 
        currentCategory={currentCategory}
        selectCategory={selectCategory} />
      <CategoryDisplay 
        categoryResponse={categoryResponse}
        currentCategory={currentCategory} />
    </main>
  );
};

Main.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
  categoryResponse: PropTypes.array.isRequired
};

export default Main;