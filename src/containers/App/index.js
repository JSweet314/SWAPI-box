import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import CrawlContainer from '../CrawlContainer/index';
import Favorites from '../../components/Favorites/index';
import Header from '../../components/Header/index';
import PeopleContainer from '../PeopleContainer/index';
import PlanetsContainer from '../PlanetsContainer/index';
import VehiclesContainer from '../VehiclesContainer/index';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      numberOfFavorites: 0
    };
  }

  componentDidMount = () => {
    this.retrieveFavorites();
  }

  handleOnClick = (card, category) => {
    const alreadyFavored = this.state.favorites.some(favorite =>
      favorite.name === card.name
    );

    if (alreadyFavored) {
      this.removeFavorite(card.name);
    } else {
      this.selectFavorite({...card, category});
    }
  }

  selectFavorite = (favObj) => {
    const favorites = [...this.state.favorites, favObj];
    const numberOfFavorites = this.state.numberOfFavorites + 1;
    this.setState({favorites, numberOfFavorites}, this.storeFavorites);
  }

  removeFavorite = (name) => {
    const favorites = this.state.favorites.filter(fav => fav.name !== name);
    const numberOfFavorites = this.state.numberOfFavorites - 1;
    this.setState({favorites, numberOfFavorites}, this.storeFavorites);
  }
  
  storeFavorites = () => {
    const { favorites, numberOfFavorites } = this.state;
    localStorage.setItem('SWAPI-Favorites', JSON.stringify({
      favorites,
      numberOfFavorites
    }));
  }

  retrieveFavorites = () => {
    const priorFavorites = localStorage.getItem('SWAPI-Favorites');
    if (priorFavorites) {
      const { favorites, numberOfFavorites } = JSON.parse(priorFavorites);
      this.setState({ favorites, numberOfFavorites });
    }
  }

  render() {
    const {numberOfFavorites, favorites} = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Switch>
          <Route exact path="/" component={CrawlContainer} />
          <Route exact path="/people" 
            render={() => <PeopleContainer
              handleOnClick={this.handleOnClick}
              favorites={favorites} />} />
          <Route exact path="/planets" 
            render={() => <PlanetsContainer
              handleOnClick={this.handleOnClick}
              favorites={favorites} />} />
          <Route exact path="/vehicles" 
            render={() => <VehiclesContainer
              handleOnClick={this.handleOnClick}
              favorites={favorites} />} />
          <Route exact path="/favorites"
            render={() => <Favorites 
              handleOnClick={this.handleOnClick}
              favorites={favorites} />} />
        </Switch>
      </div>
    );
  }
}

export default App;