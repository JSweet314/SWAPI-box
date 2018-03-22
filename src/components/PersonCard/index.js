import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PersonCard = ({card, favorites, handleOnClick}) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{card.name}</h3>
          <button 
            className={selected}
            onClick={() => handleOnClick(card, 'people')}>
          </button>
        </div>
        <p>Homeworld: {card.homeworld}</p>
        <p>Species: {card.species}</p>
        <p>Home Population: {addCommas(card.population)}</p>
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
  favorites: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default PersonCard;