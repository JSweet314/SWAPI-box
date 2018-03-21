import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import ScrollingText from '../ScrollingText/index';
import {Switch, Route} from 'react-router-dom';
import PeopleDisplay from '../PeopleDisplay/index';
import PlanetsDisplay from '../PlanetDisplay/index';
import VehiclesDisplay from '../VehiclesDisplay/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfFavorites: 0,
      favorites: []
    };
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