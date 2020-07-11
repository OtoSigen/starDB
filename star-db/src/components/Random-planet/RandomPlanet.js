import React, { Component } from "react";
import styles from "./RandomPlanet.module.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
  };

  componentDidMount() {
    this.updatePlanet();
    //this.interval = setInterval(this.updatePlanet, 10000);
    //clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, isLoading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  };

  render() {
    const { planet, isLoading } = this.state;
    const spinner = isLoading ? <Spinner /> : null;
    const content = !isLoading ? <PlanetView planet={planet} /> : null;

    return (
      <div className={styles.planet_wrap}>
        {spinner}
        {content}
      </div>
    );
  }
}
export default RandomPlanet;

const PlanetView = ({ planet }) => {
  const { id, name, diameter, rotationPeriod, population, climate } = planet;
  return (
    <>
      <img
        className={styles.planet_img}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
      />
      <div className={styles.planet_info}>
        <div>Name: {name}</div>
        <div>Diameter: {diameter}</div>
        <div>Rotation period: {rotationPeriod}</div>
        <div>Population: {population}</div>
        <div>Climate: {climate}</div>
      </div>
    </>
  );
};
