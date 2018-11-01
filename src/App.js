import React, { Component } from "react";
// import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
//BrowserRouter as Router
import "./App.css";
import Home from "./app/home/HomeContainer"; //vs. homeContainer
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;

//above home ./
//Switch or Router
