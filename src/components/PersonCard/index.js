import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class PersonCard extends Component {
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
      this.props.selectFavorite({...this.card, category});
      this.props.changeFavCount(1);
      this.setState({selected: 'selected'});
    } else {
      this.props.changeFavCount(-1);
      this.props.removeFavorite(this.card.name);
      this.setState({selected: ''});
    }
  }

  render() {
    return (
      <article className="info-card">
        <div>
          <div className="info-card__top-line">
            <h3>{this.card.name}</h3>
            <button className={this.state.selected}
              onClick={this.handleOnClick}></button>
          </div>
          <p>Homeworld: {this.card.homeworld}</p>
          <p>Species: {this.card.species}</p>
          <p>Homeworld Pop.: {this.card.population}</p>
        </div>
      </article>
    );
  }
}

PersonCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
  selectFavorite: PropTypes.func.isRequired,
  changeFavCount: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired
};

export default PersonCard;