import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import RandomPlanet from "../Random-planet/RandomPlanet";
import ItemList from "../Item-list/ItemList";
import Header from "../Header/Header";
import PersonDetails from "../Person-details/PersonDetails";

export default class App extends Component {
  state = {
    selectedPerson: 5,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {
    return (
      <>
        {/*<Router>*/}
        {/*  <Header />*/}
        {/*  <RandomPlanet />*/}
        {/*  <Route path="/" exact render={() => <h2>Hello</h2>} />*/}
        {/*  <Route path="/planets" component={RandomPlanet} />*/}
        {/*  <Route path="/people" exact component={ItemList} />*/}
        {/*  <Route path="/people/:id" component={ItemList} />*/}
        {/*</Router>*/}
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </>
    );
  }
}
