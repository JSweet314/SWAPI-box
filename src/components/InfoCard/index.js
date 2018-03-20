import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const InfoCard = ({card}) => {
  return (
    <article className="info-card">   
      <div>
        <h3>{card.name}</h3>
        <p>Homeworld: {card.homeworld}</p>
        <p>Species: {card.species}</p>
        <p>Homeworld Pop.: {card.population}</p>
      </div>
    </article>
  );
};

InfoCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired
  }).isRequired
};

export default InfoCard;