import React, {Component} from 'react';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData';
import loadingGIF from '../../images/Loading_icon.gif';
import PersonCard from '../../components/PersonCard/index';
import PropTypes from 'prop-types';
import './style.css';

export default class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArray: [],
      pageNumber: 1,
      loading: true
    };
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
    const cards = this.state.peopleArray.map(card => 
      <PersonCard
        handleOnClick={this.props.handleOnClick}
        favorites={this.props.favorites}
        key={card.name}
        card={card} />
    );

    return !this.state.loading ? 
      (<div className="people-display">
        {cards}
      </div>)
      : (<div className="category-display">
        <img src={loadingGIF} alt="loading" />
      </div>);
  }
}

PeopleContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};