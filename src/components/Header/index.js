import React from 'react';
import {NavLink} from 'react-router-dom';
import NavLinks from '../NavLinks/index';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({numberOfFavorites}) => {
  return (
    <header className="header">
      <h1 className="header__h1">SWAPI-Box</h1>
      <NavLink className="header__favBtn" exact to="/favorites">
        View Favorites 
        <span className="header__favCount">{numberOfFavorites}</span>
      </NavLink>
      <NavLinks />
    </header>
  );
};

Header.propTypes = {
  numberOfFavorites: PropTypes.number.isRequired
};

export default Header;