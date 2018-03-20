import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const InfoCard = ({ name, homeworld, species, population }) => {
  return (
    <article className="info-card">
      <h3>{name}</h3>
      <p>{homeworld}</p>
      <p>{species}</p>
      <p>{population}</p>
    </article>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired
};

export default InfoCard;