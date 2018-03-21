import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
    this.card = props.card;
  }

  handleOnClick = () => {
    if (!this.state.selected) {
      const category = this.props.currentCategory;
      this.props.selectFavorite({ ...this.card, category });
      this.props.changeFavCount(1);
      this.setState({ selected: 'selected' });
    } else {
      this.props.changeFavCount(-1);
      this.props.removeFavorite(this.card.name);
      this.setState({ selected: '' });
    }
  }

  render() {
    const residents = this.card.residents.join(', ');
    return (
      <article className="info-card">
        <div>
          <div className="info-card__top-line">
            <h3>{this.card.name}</h3>
            <button className={this.state.selected}
              onClick={this.handleOnClick}></button>
          </div>
          <p>Population: {this.card.population}</p>
          <p>Terrain: {this.card.terrain}</p>
          <p>Climate: {this.card.climate}</p>
          <p>Residents: {residents}</p>
        </div>
      </article>
    );
  }
}

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