import React, {Component} from 'react';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';
import fetchResidentsData from '../../apiCalls/fetchResidentsData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData';
import loadingGIF from '../../images/Loading_icon.gif';
import PersonCard from '../../components/PersonCard/index';
import PlanetCard from '../../components/PlanetCard/index';
import PropTypes from 'prop-types';
import VehicleCard from '../../components/VehicleCard/index';
import './style.css';

export default class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArray: [],
      planetsArray: [],
      vehiclesArray: [],
      pageNumber: 1,
      loading: true
    };
  }

  componentDidMount = () => {
    const priorData = localStorage.getItem(
      `SWAPI-${this.props.match.params.id}`
    );
    if (priorData) {
      const dataArray = `${this.props.match.params.id}Array`;
      const value = JSON.parse(priorData);
      this.setState({[dataArray]: value, loading: false});
    } else {
      this.findCategoryById();
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const priorData = localStorage.getItem(
        `SWAPI-${this.props.match.params.id}`
      );
      if (priorData) {
        const dataArray = `${this.props.match.params.id}Array`;
        const value = JSON.parse(priorData);
        this.setState({ [dataArray]: value, loading: false });
      } else {
        this.setState({pageNumber: 1, loading: true}, this.findCategoryById());
      }
    }
  }

  findCategoryById = () => {
    switch (this.props.match.params.id) {
    case 'planets':
      this.getPlanetsData();
      return;
    case 'people':
      this.getPeopleData();
      return;
    case 'vehicles':
      this.getVehiclesData();
      return;
    default:
      break;
    }
  }

  buildCards = () => {
    switch (this.props.match.params.id) {
    case 'people':
      return this.getPersonCards();
    case 'planets':
      return this.getPlanetCards();
    case 'vehicles':
      return this.getVehicleCards();
    default:
      return null;
    }
  }

  getPeopleData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('people', pageNumber)
      .then(fetchPlanetData)
      .then(fetchSpeciesData)
      .then(peopleArray => this.setState(
        { peopleArray, loading: false },
        this.storeCategoryData
      ))
      .catch(error => alert(error.message));
  }

  getPersonCards = () => {
    return this.state.peopleArray.map(card =>
      <PersonCard
        handleOnClick={this.props.handleOnClick}
        favorites={this.props.favorites}
        key={card.name}
        card={card} />
    );
  }

  getPlanetsData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('planets', pageNumber)
      .then(fetchResidentsData)
      .then(planetsArray => this.setState(
        { planetsArray, loading: false },
        this.storeCategoryData
      ))
      .catch(error => alert(error.message));
  }

  getPlanetCards = () => {
    return this.state.planetsArray.map(card =>
      <PlanetCard
        handleOnClick={this.props.handleOnClick}
        favorites={this.props.favorites}
        category="Planets"
        key={card.name}
        card={card} />
    );
  }

  getVehiclesData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('vehicles', pageNumber)
      .then(vehiclesArray => this.setState(
        { vehiclesArray, loading: false },
        this.storeCategoryData
      ))
      .catch(error => alert(error.message));
  }

  getVehicleCards = () => {
    return this.state.vehiclesArray.map(card =>
      <VehicleCard
        handleOnClick={this.props.handleOnClick}
        favorites={this.props.favorites}
        key={card.name}
        card={card} />
    );
  }

  storeCategoryData = () => {
    localStorage.setItem(`SWAPI-${this.props.match.params.id}`, 
      JSON.stringify(this.state[
        `${this.props.match.params.id}Array`
      ])
    );
  }
   
  render = () => {
    const cards = this.buildCards();

    return !this.state.loading ? 
      (<div className="people-display">
        {cards}
      </div>)
      : (<div className="category-display">
        <img src={loadingGIF} alt="loading" />
      </div>);
  }
}

CardsContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};