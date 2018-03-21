import React, { Component } from 'react';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchResidentsData from '../../apiCalls/fetchResidentsData';
import PlanetCard from './PlanetCard/index';
import loadingGIF from '../../images/Loading_icon.gif';

export default class PlanetsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetsArray: [],
      pageNumber: 1,
      loading: true
    };
    this.favorites = props.favorites;
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
    const cards = this.state.planetsArray.map(card => {
      return <PlanetCard
        favorites={this.favorites}
        category="Planets"
        key={card.name}
        card={card} />;
    });

    return !this.state.loading ?
      (<div className="category-display">
        <h2>Planets</h2>
        {cards}
      </div>) :
      (<div className="category-display">
        <img src={loadingGIF} alt="loading" />
      </div>);
  }
}