import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./PersonDetails.css";

class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }

  render() {
    if (!this.state.person) {
      return <span>Выберите персонажа</span>;
    }

    const { id, name, gender, birthYear, height } = this.state.person;
    return (
      <div className="person-details card">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height: </span>
              <span>{height}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
