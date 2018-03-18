import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__h1">SWAPI-Box</h1>
      <button className="header__favBtn">
        Favorites 
        <span className="header__favCount">0</span>
      </button>
    </header>
  );
};

export default Header;