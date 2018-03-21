import React, { Component } from 'react';
import loadingGIF from '../../images/Loading_icon.gif';
import VehicleCard from './VehicleCard/index';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import PropTypes from 'prop-types';

export default class VehiclesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclesArray: [],
      pageNumber: 1,
      loading: true
    };
    this.favorites = props.favorites;
  }

  componentDidMount = () => {
    const priorData = localStorage.getItem('SWAPI-Vehicles');
    if (priorData) {
      const vehiclesArray = JSON.parse(priorData);
      this.setState({ vehiclesArray, loading: false });
    } else {
      this.getVehiclesData();
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { vehiclesArray } = this.state;
    if (prevState.vehiclesArray !== vehiclesArray) {
      localStorage.setItem('SWAPI-Vehicles', JSON.stringify(vehiclesArray));
    }
  }

  getVehiclesData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('vehicles', pageNumber)
      .then(vehiclesArray => this.setState({ vehiclesArray, loading: false }))
      .catch(error => alert(error.message));
  }

  render() {
    const cards = this.state.vehiclesArray.map(card => {
      return <VehicleCard
        favorites={this.favorites}
        category="vehicles"
        key={card.name}
        card={card} />;
    });

    return !this.state.loading ?
      (<div className="category-display">
        <h2>vehicles</h2>
        {cards}
      </div>) :
      (<div className="category-display">
        <img src={loadingGIF} alt="loading" />
      </div>);
  }
}

VehiclesDisplay.propTypes = {
  favorites: PropTypes.array.isRequired
};