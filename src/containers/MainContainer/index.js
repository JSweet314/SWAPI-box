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
      this.setState({[dataArray]: value, loading: false});
    } else {
      this.setState({pageNumber: 1, loading: true}, this.getCategoryById);
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
    fetchPeopleData()
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
    fetchPlanetsData()
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
    fetchVehiclesData()
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
    const {handleOnClick, favorites} = this.props;
    return this.state.vehiclesArray.map(card =>
      <VehicleCard
        handleOnClick={handleOnClick}
        favorites={favorites}
        key={card.name}
        card={card} />
    );
  }

  storeCategoryData = () =>
    localStorage.setItem(
      `SWAPI-${this.props.match.params.id}`, 
      JSON.stringify(this.state[`${this.props.match.params.id}Array`])
    );
   
  render = () => {
    const {handleOnClick, favorites} = this.props;
    const cards = this.buildCards();
    const {pageNumber} = this.state;
    if (this.props.match.params.id === 'favorites') {
      return <Favorites handleOnClick={handleOnClick} favorites={favorites} />;
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