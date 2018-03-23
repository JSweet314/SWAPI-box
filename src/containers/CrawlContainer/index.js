import React, { Component } from 'react';
import fetchScrollingText from '../../apiCalls/fetchScrollingText';
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('SWAPI-crawl', JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    this.findClosestData();
  }

  findClosestData = () => {
    const priorCrawl = localStorage.getItem('SWAPI-crawl');
    if (priorCrawl) {
      const prevState = JSON.parse(priorCrawl);
      this.setState({ ...prevState });
      return;
    }
    this.getCrawl();
  }

  getCrawl = () => {
    const randomFilmNumber = Math.floor(Math.random() * 7) + 1;
    fetchScrollingText(randomFilmNumber)
      .then(filmData => {
        this.setState({
          openingCrawl: filmData.openingCrawl,
          title: filmData.title,
          releaseDate: filmData.releaseDate
        });
      })
      .catch(error => alert(error));
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