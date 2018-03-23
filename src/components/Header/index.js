import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({numberOfFavorites}) => {
  return (
    <header className="header">
      <h1 className="header__h1">SWAPI-Box</h1>
      <ul className="nav">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/category/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/category/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/category/vehicles">Vehicles</NavLink>
        </li>
      </ul>
      <NavLink className="header__favBtn" exact to="/category/favorites">
        View Favorites
        <span className="header__favCount">{numberOfFavorites}</span>
      </NavLink>
    </header>
  );
};

Header.propTypes = {
  numberOfFavorites: PropTypes.number.isRequired
};

export default Header;