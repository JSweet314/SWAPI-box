import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PlanetCard = ({card, favorites, handleOnClick}) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const confirmResidents = () => {
    if (!card.residents.length) {
      return 'n/a';
    }
    return card.residents.join(', ');
  };

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const {name, population, terrain, climate} = card;
 
  const residents = confirmResidents();
   
  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{name}</h3>
          <button 
            onClick={() => handleOnClick(card, 'planets')}
            className={selected}></button>
        </div>
        <p>Population: {addCommas(population)}</p>
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
  }).isRequired,
  favorites: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default PlanetCard;