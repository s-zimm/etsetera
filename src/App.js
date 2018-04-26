import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import CategoryScreen from './components/Categories/CategoryScreen';
import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar';

const App = (props) => {
  return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/categories" component={CategoryScreen} />
        </div>
      </Router>
  );
}

export default App;
