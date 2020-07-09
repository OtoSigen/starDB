import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./App.module.css";
import RandomPlanet from "../Random-planet/RandomPlanet";

export default class App extends Component {
  render() {
    return (
      <div>
        <RandomPlanet />
      </div>
    );
  }
}
