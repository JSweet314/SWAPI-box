import React, { Component } from 'react';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchResidentsData from '../../apiCalls/fetchResidentsData';
import loadingGIF from '../../images/Loading_icon.gif';
import PlanetCard from '../../components/PlanetCard/index';
import PropTypes from 'prop-types';
import './style.css';

export default class PlanetsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetsArray: [],
      pageNumber: 1,
      loading: true
    };
  }

  componentDidMount = () => {
    const priorData = localStorage.getItem('SWAPI-Planets');
    if (priorData) {
      const planetsArray = JSON.parse(priorData);
      this.setState({ planetsArray, loading: false });
    } else {
      this.getPlanetsData();
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { planetsArray } = this.state;
    if (prevState.planetsArray !== planetsArray) {
      localStorage.setItem('SWAPI-Planets', JSON.stringify(planetsArray));
    }
  }

  getPlanetsData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('planets', pageNumber)
      .then(fetchResidentsData)
      .then(planetsArray => this.setState({ planetsArray, loading: false }))
      .catch(error => alert(error.message));
  }

  render() {
    const cards = this.state.planetsArray.map(card => 
      <PlanetCard
        handleOnClick={this.props.handleOnClick}
        favorites={this.props.favorites}
        category="Planets"
        key={card.name}
        card={card} />
    );

    return !this.state.loading ?
      (<div className="planets-display">
        {cards}
      </div>) :
      (<div className="category-display">
        <img src={loadingGIF} alt="loading" />
      </div>);
  }
}

PlanetsContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};