import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';

import backgroundImage from '../src/img/pattern.png'

class App extends Component {
  render() {
    return (
      <div className="App" style={{background:`url(${backgroundImage})`}}>
        <Navbar/>
        <div className="container">
          <Dashboard/>
        </div>
      </div>
    );
  }
}

export default App;
