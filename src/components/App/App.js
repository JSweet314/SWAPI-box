import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfFavorites: 0,
      favorites: []
    };
  }

  changeFavCount = (num) => {
    this.setState({numberOfFavorites: this.state.numberOfFavorites + num});
  }

  render() {
    const { numberOfFavorites } = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Main changeFavCount={this.changeFavCount}/>
        <ScrollingText />
      </div>
    );
  }
}

export default App;
