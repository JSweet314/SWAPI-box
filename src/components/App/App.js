import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/ScrollingText';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <ScrollingText />
      </div>
    );
  }
}

export default App;
