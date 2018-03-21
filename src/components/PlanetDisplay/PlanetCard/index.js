import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const PlanetCard = ({card, favorites}) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const confirmResidents = () => {
    if (!card.residents.length) {
      return 'n/a';
    }
    return card.residents.join(', ');
  };
  
  const {name, population, terrain, climate} = card;
  const residents = confirmResidents();

    
  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{name}</h3>
          <button className={selected}></button>
        </div>
        <p>Population: {population}</p>
        <p>Terrain: {terrain}</p>
        <p>Climate: {climate}</p>
        <p>Residents: {residents}</p>
      </div>
    </article>
  );  
};

PlanetCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    residents: PropTypes.array.isRequired
  }).isRequired
};

export default PlanetCard;