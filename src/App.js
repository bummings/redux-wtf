import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimals } from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchAnimals();
  }
  render() {
    return (
      <div>
        {this.props.animals.map(animal => {
          return <p key={animal}>{animal}</p>;
        })}
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
