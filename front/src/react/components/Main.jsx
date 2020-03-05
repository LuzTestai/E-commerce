import React from "react";
import { Link, Route, Redirect, Switch, Router } from "react-router-dom";
import { connect } from "react-redux";

import ProductsContainer from '../containers/ProductsContainer'
import Navbar from '../containers/NavbarContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Footer from '../containers/FooterContainer'
import ViewSingleContainer from '../containers/ViewSingleContainer'
import Home from '../containers/Home'


class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/products" component={ProductsContainer} />

          <Router exact path="/products/:id" component={ViewSingleContainer} />

          <Route exact path="/register" component={RegisterContainer} />

          <Redirect from='/' to='/home' />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(null, null)(Main);
