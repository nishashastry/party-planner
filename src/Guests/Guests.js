import React, { Component } from "react";
import Guest from "../Guest/Guest.js";

class Guests extends Component {
  render() {
    return this.props.allGuests.map((eachGuest) => {
      //using default map method to render a list into jsx elements
      return <Guest guestName={eachGuest.name} guestEmail={eachGuest.email} />;
    });
  }
}

export default Guests;
