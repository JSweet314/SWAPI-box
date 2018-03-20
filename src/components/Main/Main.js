import React, { Component } from 'react';
import './Main.css';
import MainBtnGroup from '../MainBtnGroup/MainBtnGroup';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      category: '',
      loading: false,
      categoryData: []
    };
  }

  selectCategory = (event) => {
    const category = event.target.name;
    this.setState({ pageNumber: 1, loading: true, category });
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { category, pageNumber } = this.state;
    if (prevState.category !== category && category === 'people') {
      fetchCategoryData(category, pageNumber)
        .then(fetchPlanetData)
        .then(fetchSpeciesData)
        .then(categoryData => this.setState({ categoryData, loading: false }))
        .catch(error => alert(error.message));
    } 
  }

  render() {
    const { category, categoryData, loading } = this.state;
    return (
      <main className="main">
        <MainBtnGroup 
          selectCategory={this.selectCategory}
          currentCategory={category}/>
        <CategoryDisplay 
          categoryData={categoryData}
          currentCategory={category}
          loading={loading} />
      </main>
    );
  }
}