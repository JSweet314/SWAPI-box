import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/ScrollingText';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: '',
      numberOfFavorites: 0
    };
  }

  selectCategory = (currentCategory) => {
    this.setState({ currentCategory });
  }

  fetchCategoryData = () => {
    return;
  }

  render() {
    return (
      <div className="app">
        <Header numberOfFavorites={this.state.numberOfFavorites} />
        <Main 
          selectCategory={this.selectCategory}
          currentCategory={this.state.currentCategory} />
        <ScrollingText />
      </div>
    );
  }
}

export default App;
