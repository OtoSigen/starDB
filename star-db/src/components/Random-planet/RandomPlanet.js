import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./RandomPlanet.module.css";
import SwapiService from "../../services/swapi-service";

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
    climate: null,
  };

  constructor(props) {
    super(props);
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 20) + 2;
    this.swapiService.getPlanet(id).then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        climate: planet.climate,
      });
    });
  }

  render() {
    const {
      id,
      name,
      diameter,
      rotationPeriod,
      population,
      climate,
    } = this.state;
    return (
      <div>
        <img
          className={styles.planet_img}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
        />
        <div>Name: {name}</div>
        <div>Diameter: {diameter}</div>
        <div>Rotation period: {rotationPeriod}</div>
        <div>Population: {population}</div>
        <div>Climate: {climate}</div>
      </div>
    );
  }
}
export default RandomPlanet;
