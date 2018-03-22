import App from './containers/App/App';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);