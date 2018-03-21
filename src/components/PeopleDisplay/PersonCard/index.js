import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const PersonCard = (
  {card, favorites, changeFavCount, removeFavorite, selectFavorite}
) => {
  const selected = favorites.some(favorite => favorite.name === card.name) ?
    'selected' : '';

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleOnClick = () => {
    const alreadyFavored = favorites.some(favorite => 
      favorite.name === card.name
    );

    if (alreadyFavored) {
      removeFavorite(card.name);
    } else {
      selectFavorite({...card, category: 'people'});
    }
  };

  return (
    <article className="info-card">
      <div>
        <div className="info-card__top-line">
          <h3>{card.name}</h3>
          <button 
            className={selected}
            onClick={handleOnClick}>
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
  favorites: PropTypes.array.isRequired
};

export default PersonCard;