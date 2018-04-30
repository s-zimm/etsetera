import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import CategoryScreen from './components/Categories/CategoryScreen';
import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar';
import SpecificCategoryScreen from './components/Categories/SpecificCategoryScreen';
import CartScreen from './components/Cart/CartScreen';
import { bindActionCreators } from 'redux';
import { setCart } from './actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.setCart(this.props.user.id, this.props.user.jwt)
  }

  render() {
    return (
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={HomeScreen} />
            <Route path="/cart" component={CartScreen} />
            <Route exact path="/categories" component={CategoryScreen} />
            <Route path="/categories/:category" component={SpecificCategoryScreen} />
          </div>
        </Router>
    );
  }
}

let mapStateToProps = (state) => ({
  user: state.authentication
});

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCart
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
