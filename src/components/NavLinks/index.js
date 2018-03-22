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
        <NavLink exact to="/people">People</NavLink>
      </li>
      <li>
        <NavLink exact to="/planets">Planets</NavLink>
      </li>
      <li>
        <NavLink exact to="/vehicles">Vehicles</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;