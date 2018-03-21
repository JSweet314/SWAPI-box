import React, { Component } from 'react';
import './style.css';
import fetchScrollingText from '../../apiCalls/fetchScrollingText';

class ScrollingText extends Component {
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
    const priorCrawl = localStorage.getItem('SWAPI-crawl');
    if (priorCrawl) {
      const prevState = JSON.parse(priorCrawl);
      this.setState({...prevState});
      return;
    }
    fetchScrollingText()
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

export default ScrollingText;