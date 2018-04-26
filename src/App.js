import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Hashrouter as Router, Route } from 'react-router-dom';

import CategoryScreen from './components/CategoryScreen';

const App = (props) => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route to="/categories" component={CategoryScreen} />
      </Router>
    </div>
  );
}

export default App;
