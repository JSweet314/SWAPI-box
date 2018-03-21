import React, {Component} from 'react';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData';
import PersonCard from './PersonCard/index';
import loadingGIF from '../../images/Loading_icon.gif';
import PropTypes from 'prop-types';

export default class PeopleDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArray: [],
      pageNumber: 1,
      loading: true
    };
    this.favorites = props.favorites;
  }

  componentDidMount = () => {
    const priorData = localStorage.getItem('SWAPI-People');
    if (priorData) {
      const peopleArray = JSON.parse(priorData);
      this.setState({peopleArray, loading: false});
    } else {
      this.getPeopleData();
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { peopleArray } = this.state;
    if (prevState.peopleArray !== peopleArray) {
      localStorage.setItem('SWAPI-People', JSON.stringify(peopleArray));
    }
  }

  getPeopleData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('people', pageNumber)
      .then(fetchPlanetData)
      .then(fetchSpeciesData)
      .then(peopleArray => this.setState({ peopleArray, loading: false }))
      .catch(error => alert(error.message));
  }

  render = () => {
    const cards = this.state.peopleArray.map(card => {
      return <PersonCard
        favorites={this.favorites}
        category="people"
        key={card.name}
        card={card} />;
    });

    return !this.state.loading ? 
      (<div className="category-display">
        <h2>People</h2>
        {cards}
      </div>)
      : (<div className="category-display">
        <img src={loadingGIF} alt="loading" />
      </div>);
  }
}

PeopleDisplay.propTypes = {
  favorites: PropTypes.array.isRequired
};