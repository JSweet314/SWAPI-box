import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const VehicleCard = ({card, favorites, handleOnClick}) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const {name, model, vehicleClass, numberOfPassengers} = card;

  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{name}</h3>
          <button 
            onClick={() => handleOnClick(card, 'vehicles')}
            className={selected}></button>
        </div>
        <p>Model: {model}</p>
        <p>Class: {vehicleClass}</p>
        <p>Passengers: {numberOfPassengers}</p>
      </div>
    </article>
  );
};

VehicleCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    vehicleClass: PropTypes.string.isRequired,
    numberOfPassengers: PropTypes.string.isRequired
  }).isRequired,
  favorites: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default VehicleCard;