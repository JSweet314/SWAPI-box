import React, { Component } from 'react';
import {fetchOpeningCrawl} from '../../apiCalls/fetchOpeningCrawl';
import './style.css';

export default class CrawlContainer extends Component {
  constructor() {
    super();
    this.state = {
      openingCrawl: '',
      title: '',
      releaseDate: ''
    };
  }

  componentDidMount = () => {
    this.findClosestData();
  }

  findClosestData = () => {
    const priorCrawl = localStorage.getItem('SWAPI-crawl');
    if (priorCrawl) {
      const openingCrawl = JSON.parse(priorCrawl);
      this.setState({ ...openingCrawl });
      return;
    }
    this.fetchOpeningCrawl();
  }

  fetchOpeningCrawl = () => {
    const randomFilmNumber = Math.floor(Math.random() * 7) + 1;
    fetchOpeningCrawl(randomFilmNumber)
      .then(this.deployNewCrawl)
      .catch(error => alert(error));
  }

  deployNewCrawl = filmData => {
    this.setState(
      {
        openingCrawl: filmData.openingCrawl,
        title: filmData.title,
        releaseDate: filmData.releaseDate
      },
      this.storeOpeningCrawl
    );
  };

  storeOpeningCrawl = () => {
    localStorage.setItem('SWAPI-crawl', JSON.stringify(this.state));
  }

  render() {
    const {openingCrawl, title, releaseDate} = this.state;
    return (
      <aside className="scrolling-text">
        <div className="crawl">
          <pre>{openingCrawl}</pre>
          <p>{title}</p>
          <p>{releaseDate}</p>
        </div>
        <h3 className="instructions">Select a Category</h3>
      </aside>
    );
  }
}