import React from 'react';
import './Main.css';
import MainBtnGroup from '../MainBtnGroup/MainBtnGroup';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';

const Main = () => {
  return (
    <main className="main">
      <MainBtnGroup />
      <CategoryDisplay />
    </main>
  );
};

export default Main;