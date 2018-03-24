import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainContainer from '../MainContainer/index';
import OpeningCrawlContainer from '../OpeningCrawlContainer/index';
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

  componentDidMount = () => this.retrieveFavorites();

  addFavorite = (favObj) => {
    const favorites = [...this.state.favorites, favObj];
    const numberOfFavorites = this.state.numberOfFavorites + 1;
    this.setState({ favorites, numberOfFavorites }, this.storeFavorites);
  }

  storeFavorites = () => {
    const { favorites, numberOfFavorites } = this.state;
    localStorage.setItem('SWAPI-favorites', JSON.stringify({
      favorites,
      numberOfFavorites
    }));
  }
  
  removeFavorite = (name) => {
    const favorites = this.state.favorites.filter(fav => fav.name !== name);
    const numberOfFavorites = this.state.numberOfFavorites - 1;
    this.setState({ favorites, numberOfFavorites }, this.storeFavorites);
  }

  retrieveFavorites = () => {
    const priorFavorites = localStorage.getItem('SWAPI-favorites');
    if (priorFavorites) {
      const { favorites, numberOfFavorites } = JSON.parse(priorFavorites);
      this.setState({ favorites, numberOfFavorites });
    }
  }
 
  handleFavoriteClick = (card, category) => {
    const { name } = card;
    const alreadyFavored = this.state.favorites.some(fav => fav.name === name);
    if (alreadyFavored) {
      this.removeFavorite(card.name);
    } else {
      this.addFavorite({ ...card, category });
    }
  }

  render() {
    const {numberOfFavorites, favorites} = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Switch>
          <Route exact path="/" component={OpeningCrawlContainer} />
          <Route exact path="/category/:id" 
            render={({match}) => 
              <MainContainer
                handleFavoriteClick={this.handleFavoriteClick}
                match={match}
                favorites={favorites} />} />
        </Switch>
      </div>
    );
  }
}

export default App;