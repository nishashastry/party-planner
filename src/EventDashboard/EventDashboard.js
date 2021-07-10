import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../Event/Event";

class EventDashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">PartyPlan</Link>
          </h1>
          <h2> Let's Celebrate Safely</h2>
        </header>
        <h1 className="pageTitle">Event Dashboard</h1>
        <div className="page">
          <h1 className="body">My Events</h1>
          <div className="row">
            <p className="column">Event</p>
            <p className="column">Time</p>
          </div>
          <Event eventName="Sally's Bday" eventTime="1:00pm" />
          <Event eventName="Casie's Baby Shower" eventTime="4:00pm" />
          <Event eventName="Nellie's Graduation" eventTime="7:00pm" />
          <button>
            <Link to={{ pathname: "/createnewevent" }}>+ Create Event</Link>
          </button>
          <button>
            <Link to={{ pathname: "/guestlist" }}>View the Guest List</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default EventDashboard;
