import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfFavorites: 0
    };
  }

  render() {
    const { numberOfFavorites } = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Main />
        <ScrollingText />
      </div>
    );
  }
}

export default App;
