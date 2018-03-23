import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainContainer from '../MainContainer/index';
import CrawlContainer from '../CrawlContainer/index';
import Header from '../../components/Header/index';
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
      favorite.name === card.name);
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
          <Route exact path="/category/:id" 
            render={({match}) => 
              <MainContainer
                handleOnClick={this.handleOnClick}
                match={match}
                favorites={favorites} />} />
        </Switch>
      </div>
    );
  }
}

export default App;