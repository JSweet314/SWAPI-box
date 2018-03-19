import React, { Component } from 'react';
import './ScrollingText.css';
import OpeningCrawlParagraph from 
  '../OpeningCrawlParagraph/OpeningCrawlParagraph';
import scrollingTextDataWrangler from '../../scripts/scrollingTextDataWrangler';

class ScrollingText extends Component {
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

  openingCrawlParagraphs = () => {
    return this.state.openingCrawl.map((paragraph, index) => {
      return <OpeningCrawlParagraph key={index} paragraph={paragraph} />;
    });
  }

  render() {
    return (
      <aside className="scrolling-text">
        {this.openingCrawlParagraphs()}
        <p>{this.state.movieTitle}</p>
        <p>{this.state.releaseDate}</p>
      </aside>
    );
  }
}

export default ScrollingText;