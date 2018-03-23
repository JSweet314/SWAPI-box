import React, {Component} from 'react';
import Favorites from '../../components/Favorites/index';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchHomeworldData from '../../apiCalls/fetchHomeworldData';
import fetchResidentsData from '../../apiCalls/fetchResidentsData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData';
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
      pageNumber: 1,
      loading: true
    };
  }

  componentDidMount = () => {
    this.findClosestData();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.findClosestData();
    }
  }

  findClosestData = () => {
    const priorData = localStorage.getItem(
      `SWAPI-${this.props.match.params.id}`
    );
    if (priorData) {
      const dataArray = `${this.props.match.params.id}Array`;
      const value = JSON.parse(priorData);
      this.setState({ [dataArray]: value, loading: false });
    } else {
      this.setState({ pageNumber: 1, loading: true }, this.getCategoryById());
    }
  }

  getCategoryById = () => {
    switch (this.props.match.params.id) {
    case 'people':
      this.getPeopleData();
      return;
    case 'planets':
      this.getPlanetsData();
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
      return this.personCards();
    case 'planets':
      return this.planetCards();
    case 'vehicles':
      return this.vehicleCards();
    default:
      return null;
    }
  }

  getPeopleData = () => 
    fetchCategoryData('people')
      .then(fetchHomeworldData)
      .then(fetchSpeciesData)
      .then(peopleArray => this.setState(
        { peopleArray, loading: false },
        this.storeCategoryData
      ))
      .catch(error => alert(error.message));

  personCards = () => {
    const {handleOnClick, favorites} = this.props;
    return this.state.peopleArray.map(card =>
      <PersonCard
        handleOnClick={handleOnClick}
        favorites={favorites}
        key={card.name}
        card={card} />
    );
  }

  getPlanetsData = () => 
    fetchCategoryData('planets')
      .then(fetchResidentsData)
      .then(planetsArray => this.setState(
        { planetsArray, loading: false },
        this.storeCategoryData
      ))
      .catch(error => alert(error.message));

  planetCards = () => {
    const {handleOnClick, favorites} = this.props;
    return this.state.planetsArray.map(card =>
      <PlanetCard
        handleOnClick={handleOnClick}
        favorites={favorites}
        category="Planets"
        key={card.name}
        card={card} />
    );
  }

  getVehiclesData = () => 
    fetchCategoryData('vehicles')
      .then(vehiclesArray => this.setState(
        { vehiclesArray, loading: false },
        this.storeCategoryData
      ))
      .catch(error => alert(error.message));

  vehicleCards = () => {
    const {handleOnClick, favorites} = this.props;
    return this.state.vehiclesArray.map(card =>
      <VehicleCard
        handleOnClick={handleOnClick}
        favorites={favorites}
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

  handleNextPage = () => {
    
  }
   
  render = () => {
    const {handleOnClick, favorites} = this.props;
    const cards = this.buildCards();
    const {pageNumber} = this.state;
    if (this.props.match.params.id === 'favorites') {
      return <Favorites
        handleOnClick={handleOnClick}
        favorites={favorites} />;
    }
    return !this.state.loading ? 
      (
        <div className="people-display">
          {cards}
          <PageButtons pageNumber={pageNumber}/>
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
  handleOnClick: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};