import React from 'react';
import NavLinks from '../NavLinks/index';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ numberOfFavorites }) => {
  return (
    <header className="header">
      <h1 className="header__h1">SWAPI-Box</h1>
      <button className="header__favBtn">
        View Favorites 
        <span className="header__favCount">{numberOfFavorites}</span>
      </button>
      <NavLinks />
    </header>
  );
};

Header.propTypes = {
  numberOfFavorites: PropTypes.number.isRequired
};

export default Header;