import React, {Component} from 'react';
import Favorites from '../../components/Favorites/index';
import {fetchAllHomeworldData} from '../../apiCalls/fetchAllHomeworldData';
import {fetchAllResidentsData} from '../../apiCalls/fetchAllResidentsData';
import {fetchAllSpeciesData} from '../../apiCalls/fetchAllSpeciesData';
import {fetchPeopleData} from '../../apiCalls/fetchPeopleData';
import {fetchPlanetsData} from '../../apiCalls/fetchPlanetsData';
import {fetchVehiclesData} from '../../apiCalls/fetchVehiclesData';
import loadingGIF from '../../images/Loading_icon.gif';
import PageButtons from '../../components/PageButtons/index.js';
import PersonCard from '../../components/PersonCard/index';
import PlanetCard from '../../components/PlanetCard/index';
import PropTypes from 'prop-types';
import VehicleCard from '../../components/VehicleCard/index';
import './style.css';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArray: [],
      planetsArray: [],
      vehiclesArray: [],
      next: null,
      previous: null,
      loading: true
    };
  }

  componentDidMount = () => this.findClosestData();

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.findClosestData();
    }
  }

  findClosestData = () => {
    const {id} = this.props.match.params;
    const priorData = localStorage.getItem(`SWAPI-${id}`);
    if (priorData) {
      const { dataArray, next, previous } = JSON.parse(priorData);
      const key = `${id}Array`;
      this.setState({[key]: dataArray, next, previous, loading: false});
    } else {
      this.setState({loading: true}, this.getCategoryById);
    }
  }

  getCategoryById = () => {
    const {id} = this.props.match.params;
    switch (id) {
    case 'people':
      this.getPeopleData();
      break;
    case 'planets':
      this.getPlanetsData();
      break;
    case 'vehicles':
      this.getVehiclesData();
      break;
    default:
      break;
    }
  }

  buildCards = () => {
    const {id} = this.props.match.params;
    switch (id) {
    case 'people':
      return this.personCards();
    case 'planets':
      return this.planetCards();
    case 'vehicles':
      return this.vehicleCards();
    default:
      return null;
    }
  }

  getPeopleData = (url) => 
    fetchPeopleData(url)
      .then(fetchAllHomeworldData)
      .then(fetchAllSpeciesData)
      .then(this.deployPeopleData)
      .catch(error => alert(error.message));

  deployPeopleData = peopleData =>
    this.setState({
      next: peopleData.next,
      previous: peopleData.previous,
      peopleArray: peopleData.peopleArray,
      loading: false
    }, this.storeCategoryData)

  personCards = () => {
    const {handleFavoriteClick, favorites} = this.props;
    return this.state.peopleArray.map(card =>
      <PersonCard
        card={card}
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
        key={card.name} />
    );
  }

  getPlanetsData = (url) => 
    fetchPlanetsData(url)
      .then(fetchAllResidentsData)
      .then(this.deployPlanetsData)
      .catch(error => alert(error.message));

  deployPlanetsData = planetsData => 
    this.setState({
      next: planetsData.next,
      previous: planetsData.previous,
      planetsArray: planetsData.planetsArray,
      loading: false
    }, this.storeCategoryData)

  planetCards = () => {
    const {handleFavoriteClick, favorites} = this.props;
    return this.state.planetsArray.map(card =>
      <PlanetCard
        card={card}
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
        key={card.name} />
    );
  }

  getVehiclesData = (url) => 
    fetchVehiclesData(url)
      .then(this.deployVehiclesData)
      .catch(error => alert(error.message));

  deployVehiclesData = vehiclesData => 
    this.setState({
      next: vehiclesData.next,
      previous: vehiclesData.previous,
      vehiclesArray: vehiclesData.vehiclesArray,
      loading: false
    }, this.storeCategoryData)

  vehicleCards = () => {
    const {handleFavoriteClick, favorites} = this.props;
    return this.state.vehiclesArray.map(card =>
      <VehicleCard
        card={card} 
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
        key={card.name} />
    );
  }

  getNextPage = () => {
    const {id} = this.props.match.params;
    const {next} = this.state;
    switch (id) {
    case 'people':
      this.getPeopleData(next);
      break;
    case 'planets':
      this.getPlanetsData(next);
      break;
    case 'vehicles':
      this.getVehiclesData(next);
      break;
    default:
      break;
    }
  }

  getPreviousPage = () => {
    const {id} = this.props.match.params;
    const {previous} = this.state;
    switch (id) {
    case 'people':
      this.getPeopleData(previous);
      break;
    case 'planets':
      this.getPlanetsData(previous);
      break;
    case 'vehicles':
      this.getVehiclesData(previous);
      break;
    default:
      break;
    }
  }

  handlePageButtonClick = (event) => {
    const name = event.target.name;
    if (name === 'previous') {
      this.setState({loading: true}, this.getPreviousPage);
    } else {
      this.setState({ loading: true }, this.getNextPage);
    }
  }

  storeCategoryData = () => {
    const {next, previous} = this.state;
    const {id} = this.props.match.params;
    localStorage.setItem(`SWAPI-${id}`, JSON.stringify({
      next: next,
      previous: previous,
      dataArray: this.state[`${id}Array`]
    }));
  }
   
  render = () => {
    const {handleFavoriteClick, favorites} = this.props;
    const {next, previous} = this.state;
    const cards = this.buildCards();
    if (this.props.match.params.id === 'favorites') {
      return (
        <Favorites 
          handleFavoriteClick={handleFavoriteClick} 
          favorites={favorites} />
      );
    }

    return !this.state.loading ? 
      (
        <div className="people-display">
          {cards}
          <PageButtons 
            handlePageButtonClick={this.handlePageButtonClick}
            next={next}
            previous={previous} />
        </div>
      ) : (
        <div className="category-display">
          <img src={loadingGIF} alt="loading" />
        </div>
      );
  }
}

MainContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleFavoriteClick: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};