import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/ScrollingText';
import categoryDataWrangler from '../../scripts/categoryDataWrangler';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: '',
      numberOfFavorites: 0,
      pageNumber: 1,
      categoryResponse: []
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentCategory !== this.state.currentCategory) {
      this.fetchCategoryData(this.state.currentCategory);
    }
  }

  selectCategory = (currentCategory) => {
    this.setState({ currentCategory });
  }

  fetchCategoryData = (category) => {
    const { pageNumber } = this.state; 
    fetch(`https://swapi.co/api/${category}/?format=json&page=${pageNumber}`)
      .then(response => response.json())
      .then(categoryData => {
        const categoryResponse = categoryDataWrangler(categoryData, category);
        this.setState({categoryResponse});
      })
      .catch(error => alert(error));
  }

  render() {
    const { currentCategory, categoryResponse, numberOfFavorites } = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Main 
          selectCategory={this.selectCategory}
          currentCategory={currentCategory}
          categoryResponse={categoryResponse} />
        <ScrollingText />
      </div>
    );
  }
}

export default App;
