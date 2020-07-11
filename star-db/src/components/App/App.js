import React, { Component } from "react";
import styles from "./App.module.css";
import RandomPlanet from "../Random-planet/RandomPlanet";
import ItemList from "../Item-list/ItemList";

export default class App extends Component {
  render() {
    return (
      <div>
        <RandomPlanet />
        <ItemList />
      </div>
    );
  }
}
