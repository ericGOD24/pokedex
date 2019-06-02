import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';

import backgroundImage from '../src/img/pattern.png'
import Pokemon from './components/pokemon/Pokemon'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{background:`url(${backgroundImage})`}}>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}></Route>
            </Switch>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
