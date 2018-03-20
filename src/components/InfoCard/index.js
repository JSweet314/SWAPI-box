import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      loading: true
    };
    this.planetURL = props.card.homeworld;
    this.speciesURL = props.card.species;
  }

  componentDidMount = () => {
    const { card } = this.state;
    fetchPlanetData(this.planetURL)
      .then(planetData => this.setState({
        card: Object.assign({}, card, planetData),
        loading: false
      }));
  }
  
  render() {
    const { loading, card } = this.state;
    return (
      <article className="info-card">
        {
          !loading && 
            <div>
              <h3>{card.name}</h3>
              <p>{card.homeworld}</p>
              <p>{card.species}</p>
              <p>{card.population}</p>
            </div>
        }
      </article>
    );
  }
}

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired
};

export default InfoCard;