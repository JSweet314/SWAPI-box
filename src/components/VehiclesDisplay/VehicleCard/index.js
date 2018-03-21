import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const VehicleCard = ({card, favorites, selectFavorite, removeFavorite}) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const handleOnClick = () => {
    const alreadyFavored = favorites.some(favorite =>
      favorite.name === card.name
    );

    if (alreadyFavored) {
      removeFavorite(card.name);
    } else {
      selectFavorite({ ...card, category: 'planets' });
    }
  };

  const {name, model, vehicleClass, numberOfPassengers} = card;

  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{name}</h3>
          <button 
            onClick={handleOnClick}
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
  selectFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
};

export default VehicleCard;