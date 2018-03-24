import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../PersonCard/index';
import VehicleCard from '../VehicleCard/index';
import PlanetCard from '../PlanetCard/index';
import './style.css';

const Favorites = ({favorites, handleFavoriteClick}) => {
  const favoriteCards = favorites.map(favorite => {
    switch (favorite.category) {
    case 'people': 
      return <PersonCard
        handleFavoriteClick={handleFavoriteClick}
        favorites={favorites}
        key={favorite.name}
        card={favorite} />;
    case 'vehicles':
      return <VehicleCard
        handleFavoriteClick={handleFavoriteClick}
        favorites={favorites}
        key={favorite.name}
        card={favorite} />;
    case 'planets':
      return <PlanetCard
        handleFavoriteClick={handleFavoriteClick}
        favorites={favorites}
        key={favorite.name}
        card={favorite} />;
    default:
      return null;
    }
  });

  if (!favorites.length) {
    return (
      <div className="favorites-display">
        <h5>You Have No Favorites</h5>
      </div>
    );
  }

  return (
    <div className="favorites-display">
      {favoriteCards}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleFavoriteClick: PropTypes.func.isRequired
};

export default Favorites;