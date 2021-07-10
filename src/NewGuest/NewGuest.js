import React, { Component } from "react";
import { Link } from "react-router-dom";
import Guests from "../Guests/Guests";
//import CarbonDatePicker from "react-carbon-datepicker";

class NewGuest extends Component {
  state = {
    allGuests: [
      { guestName: "Mary Jones", guestEmail: "mj@gmail.com" },
      { guestName: "Bob Jones", guestEmail: "bj@gmail.com" }
    ]
  };

  guestAddedHandler = (event1, event2) => {
    const newGuestList = [
      ...this.state.allGuests,
      { name: event1.target.value, email: event2.target.value }
    ];
    this.setState({ allGuests: newGuestList });
    console.log(this.state.allGuests);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Add New Guest</h2>
        </header>
        <h1 className="body">Add New Guest</h1>

        <div className="row">
          <p className="column">
            <label for="name">Guest Name:</label>
          </p>
          <p className="column">Email Address:</p>
        </div>

        <div classname="row">
          <input
            className="column"
            type="text"
            id="name"
            name="name"
            onChange={this.guestAddedHandler()}
            value={this.state.allGuests.guestName}
          />
          <input
            className="column"
            type="text"
            id="email"
            name="email"
            onChange={this.guestAddedHandler()}
            value={this.state.allGuests.guestName}
          />
        </div>

        <Guests
          allGuests={this.state.allGuests}
          added={this.guestAddedHandler}
        />

        <button>
          <Link to={{ pathname: "/guestlist" }}>Add Guest</Link>
        </button>
      </div>
    );
  }
}

export default NewGuest;
