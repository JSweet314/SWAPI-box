import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ScrollingText from '../ScrollingText/ScrollingText';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingCrawl: '',
      movieTitle: '',
      releaseDate: ''
    };
  }

  componentDidMount() {
    // fetch('https://swapi.co/api/films/1/?format=json')
    //   .then(response => response.json())
    //   .then(SWAPIData => {
    //     this.setState({
    //       openingCrawl: SWAPIData.opening_crawl,
    //       movieTitle: SWAPIData.title,
    //       releaseDate: SWAPIData.release_date
    //     });
    //   });
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
