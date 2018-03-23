import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const NavLinks = () => {
  return (
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
  );
};

export default NavLinks;