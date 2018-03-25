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