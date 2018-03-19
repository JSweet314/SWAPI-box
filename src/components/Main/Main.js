import React, { Component } from 'react';
import './Main.css';
import MainBtnGroup from '../MainBtnGroup/MainBtnGroup';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      category: '',
      loading: true,
      categoryResponse: []
    };
  }

  selectCategory = (event) => {
    const category = event.target.name;
    this.setState({category});
  }

  componentDidUpdate(prevProps, prevState) {
    const { category, pageNumber } = this.state;
    if (prevState.category !== this.state.category) {
      fetchCategoryData(category, pageNumber)
        .then(categoryData => this.setState({
          loading: false,
          categoryData: categoryData
        }));
    } 
  }

  render() {
    const { category, categoryResponse } = this.state
    return (
      <main className="main">
        <MainBtnGroup 
          selectCategory={this.selectCategory}
          currentCategory={category}/>
        <CategoryDisplay 
          categoryResponse={categoryResponse}
          currentCategory={category}/>
      </main>
    );
  }
}