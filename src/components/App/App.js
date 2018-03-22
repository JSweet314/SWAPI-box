import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import ScrollingText from '../ScrollingText/index';
import {Switch, Route} from 'react-router-dom';
import PeopleDisplay from '../PeopleDisplay/index';
import PlanetsDisplay from '../PlanetDisplay/index';
import VehiclesDisplay from '../VehiclesDisplay/index';
import fetchCategoryData from '../../apiCalls/fetchCategoryData';
import fetchPlanetData from '../../apiCalls/fetchPlanetData';
import fetchSpeciesData from '../../apiCalls/fetchSpeciesData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      loading: true,
      numberOfFavorites: 0,
      pageNumber: 1,
      starWarsData: []
    };
  }

  componentDidMount = () => {
    console.log(this.props.param)
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   const { peopleArray } = this.state;
  //   if (prevState.peopleArray !== peopleArray) {
  //     localStorage.setItem('SWAPI-People', JSON.stringify(peopleArray));
  //   }
  // }

  getPeopleData = () => {
    const { pageNumber } = this.state;
    fetchCategoryData('people', pageNumber)
      .then(fetchPlanetData)
      .then(fetchSpeciesData)
      .then(peopleArray => this.setState({ peopleArray, loading: false }))
      .catch(error => alert(error.message));
  }

  toggleFavoriteCard = (card, category) => {
    const alreadyFavored = this.state.favorites.some(favorite =>
      favorite.name === card.name
    );

    if (alreadyFavored) {
      this.removeFavorite(card.name);
    } else {
      this.selectFavorite({ ...card, category });
    }
  }

  selectFavorite = (favObj) => {
    const favorites = [...this.state.favorites, favObj];
    const numberOfFavorites = this.state.numberOfFavorites + 1;
    this.setState({favorites, numberOfFavorites});
  }

  removeFavorite = (name) => {
    const favorites = this.state.favorites.filter(fav => fav.name !== name);
    const numberOfFavorites = this.state.numberOfFavorites - 1;
    this.setState({favorites, numberOfFavorites});
  }

  render() {
    const {numberOfFavorites, favorites} = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Switch>
          <Route exact path="/" component={ScrollingText} />
          <Route path="/people" 
            render={() => <PeopleDisplay
              removeFavorite={this.removeFavorite}
              selectFavorite={this.selectFavorite}
              favorites={favorites} />} />
          <Route path="/planets" 
            render={() => <PlanetsDisplay
              removeFavorite={this.removeFavorite}
              selectFavorite={this.selectFavorite}
              favorites={favorites} />} />
          <Route path="/vehicles" 
            render={() => <VehiclesDisplay
              removeFavorite={this.removeFavorite}
              selectFavorite={this.selectFavorite}
              favorites={favorites} />} />
        </Switch>
      </div>
    );
  }
}

export default App;