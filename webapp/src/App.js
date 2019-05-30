import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Dashboard/>
        </div>
      </div>
    );
  }
}

export default App;
