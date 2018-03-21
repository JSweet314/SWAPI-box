import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const PersonCard = ({card, favorites}) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const commasAdded = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{card.name}</h3>
          <button className={selected}></button>
        </div>
        <p>Homeworld: {card.homeworld}</p>
        <p>Species: {card.species}</p>
        <p>Home Population: {commasAdded(card.population)}</p>
      </div>
    </article>
  );
};
  
PersonCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
  selectFavorite: PropTypes.func.isRequired,
  changeFavCount: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired
};

export default PersonCard;