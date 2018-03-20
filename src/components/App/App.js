import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import ScrollingText from '../ScrollingText/index';
import { Switch, Route } from 'react-router-dom';
import PeopleDisplay from '../PeopleDisplay/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfFavorites: 0,
      favorites: []
    };
  }

  changeFavCount = (num) => {
    this.setState({numberOfFavorites: this.state.numberOfFavorites + num});
  }

  render() {
    const { numberOfFavorites } = this.state;
    return (
      <div className="app">
        <Header numberOfFavorites={numberOfFavorites} />
        <Switch>
          <Route exact path="/" component={ScrollingText}/>
          <Route path="/people" component={PeopleDisplay}/>
          {/* <Route path="/planets" component={PlanetsDisplay} />
          <Route path="/vehicles" component={VehiclesDisplay} /> */}
        </Switch>
        
      </div>
    );
  }
}

export default App;
