import React, { Component } from "react";
import ReactDOM from "react";
import { connect } from "react-redux";
import { fetchAnimals } from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchAnimals();
  }
  return() {
    return (
      <div>
        <h1>bruh</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state
  };
};

export default connect(
  mapStateToProps,
  { fetchAnimals }
)(App);
