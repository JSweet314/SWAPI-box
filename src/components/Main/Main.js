import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      category: '',
      loading: false,
      categoryData: [],
      favorites: []
    };
  }

  selectFavorite = (favObj) => {
    this.setState({favorites: [...this.state.favorites, favObj]});
  }

  removeFavorite = (name) => {
    const favorites = this.state.favorites.filter(fav => fav.name !== name);
    this.setState({ favorites });
  }

  selectCategory = (event) => {
    const category = event.target.name;
    this.setState({ pageNumber: 1, loading: true, category });
  }

  getPeopleData = () => {
    const { category, pageNumber } = this.state;
    fetchCategoryData(category, pageNumber)
      .then(fetchPlanetData)
      .then(fetchSpeciesData)
      .then(categoryData => this.setState({ categoryData, loading: false }))
      .catch(error => alert(error.message));
  }

  getPlanetData = () => {
    const { category, pageNumber } = this.state;
    fetchCategoryData(category, pageNumber)
      .then(categoryData => this.setState({ categoryData }));
      
  }

  getVehiclesData = () => {
    const { category, pageNumber } = this.state;
    fetchCategoryData(category, pageNumber)
      .then(categoryData => this.setState({ categoryData }));
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { category } = this.state;
    if (prevState.category !== category) {
      switch (category) {
      case 'people':
        this.getPeopleData();
        break;
      case 'planets':
        this.getPlanetData();
        break;
      case 'vehicles':
        this.getVehiclesData();
        break;
      default:
        break;
      }
    } 
  }

  render() {
    const { category, categoryData, loading } = this.state;
    return (
      <main className="main">
        <CategoryDisplay 
          categoryData={categoryData}
          currentCategory={category}
          changeFavCount={this.props.changeFavCount}
          selectFavorite={this.selectFavorite}
          removeFavorite={this.removeFavorite}
          loading={loading} />
      </main>
    );
  }
}

Main.propTypes = {
  changeFavCount: PropTypes.func.isRequired
};