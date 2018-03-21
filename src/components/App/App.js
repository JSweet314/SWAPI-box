import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import ScrollingText from '../ScrollingText/index';
import { Switch, Route } from 'react-router-dom';
import PeopleDisplay from '../PeopleDisplay/index';
import PlanetsDisplay from '../PlanetDisplay/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfFavorites: 0,
      favorites: []
    };
  }

  selectFavorite = (favObj) => {
    this.setState({ favorites: [...this.state.favorites, favObj] });
  }

  removeFavorite = (name) => {
    const favorites = this.state.favorites.filter(fav => fav.name !== name);
    this.setState({ favorites });
  }

  changeFavCount = (num) => {
    this.setState({numberOfFavorites: this.state.numberOfFavorites + num});
  }

  render() {
    const { numberOfFavorites, favorites } = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Switch>
          <Route exact path="/" component={ScrollingText} />
          <Route path="/people" 
            render={() => <PeopleDisplay favorites={favorites} />} />
          <Route path="/planets" 
            render={() => <PlanetsDisplay favorites={favorites} />} />
          {/* <Route path="/vehicles" 
            component={VehiclesDisplay} favorites={favorites} /> */}
        </Switch>
        
      </div>
    );
  }
}

export default App;
