import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";
import "./ItemList.css";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: [],
    isLoading: true,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList, isLoading: false });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li className="list-group-item color" key={id}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList, isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemList;
