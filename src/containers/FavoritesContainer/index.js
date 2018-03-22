import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/PersonCard/index';
import VehicleCard from '../../components/VehicleCard/index';
import PlanetCard from '../../components/PlanetCard/index';
import './style.css';

const Favorites = ({favorites, handleOnClick}) => {
  const favoriteCards = favorites.map(favorite => {
    switch (favorite.category) {
    case 'people': 
      return <PersonCard
        handleOnClick={handleOnClick}
        favorites={favorites}
        key={favorite.name}
        card={favorite} />;
    case 'vehicles':
      return <VehicleCard
        handleOnClick={handleOnClick}
        favorites={favorites}
        key={favorite.name}
        card={favorite} />;
    case 'planets':
      return <PlanetCard
        handleOnClick={handleOnClick}
        favorites={favorites}
        key={favorite.name}
        card={favorite} />;
    default:
      return <h3>You Have No Favorites</h3>;
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
  handleOnClick: PropTypes.func.isRequired
};

export default Favorites;