import React, { Component } from 'react';
import './style.css';
import fetchScrollingText from './apiCalls/fetchScrollingText';

class ScrollingText extends Component {
  constructor() {
    super();
    this.state = {
      openingCrawl: '',
      title: '',
      releaseDate: ''
    };
  }

  componentDidMount() {
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
        <pre>{openingCrawl}</pre>
        <p>{title}</p>
        <p>{releaseDate}</p>
      </aside>
    );
  }
}

export default ScrollingText;