import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/ScrollingText';
import scrollingTextDataWrangler from '../../scripts/scrollingTextDataWrangler';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingCrawl: [],
      movieTitle: '',
      releaseDate: ''
    };
  }

  componentDidMount() {
    this.fetchScrollingText();
  }

  fetchScrollingText = () => {
    const randomFilmNumber = Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomFilmNumber}/?format=json`)
      .then(response => response.json())
      .then(SWAPIData => scrollingTextDataWrangler(SWAPIData))
      .then(SWAPIData => {
        this.setState({
          openingCrawl: SWAPIData.openingCrawlParagraphs,
          movieTitle: SWAPIData.title,
          releaseDate: SWAPIData.releaseDate
        });
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <ScrollingText 
          openingCrawl={this.state.openingCrawl}
          movieTitle={this.state.movieTitle}
          releaseDate={this.state.releaseDate}/>
      </div>
    );
  }
}

export default App;
