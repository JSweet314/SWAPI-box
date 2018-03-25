import React, {Component} from 'react';
import {fetchOpeningCrawl} from '../../apiCalls/fetchOpeningCrawl';
import './style.css';

export default class OpeningCrawlContainer extends Component {
  constructor() {
    super();
    this.state = {
      openingCrawl: '',
      title: '',
      releaseDate: '',
      errorStatus: ''
    };
  }

  componentDidMount = () => this.getOpeningCrawl()

  getOpeningCrawl = () => {
    const randomFilmNumber = Math.floor(Math.random() * 7) + 1;
    fetchOpeningCrawl(randomFilmNumber)
      .then(this.deployNewCrawl)
      .catch(error => this.setState({ errorStatus: error.message }));
  }

  deployNewCrawl = filmData => {
    const {openingCrawl, title, releaseDate} = filmData;
    this.setState({openingCrawl, title, releaseDate});
  };

  render() {
    const {openingCrawl, title, releaseDate, errorStatus} = this.state;
    if (errorStatus) {
      return (
        <section className="scrolling-text">
          <div className="crawl">
            <h3>Something went wrong...</h3>
            <h3>Please select a category or try again at a latter time.</h3>
            <p>{errorStatus}</p>
          </div>
        </section>
      );
    }
    return (
      <section className="scrolling-text">
        <div className="crawl">
          <pre>{openingCrawl}</pre>
          <p>{title}</p>
          <p>{releaseDate}</p>
        </div>
        <h3 className="instructions">Select a Category</h3>
      </section>
    );
  }
}