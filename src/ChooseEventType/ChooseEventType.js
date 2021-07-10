import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChooseEventType extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2> Let's Celebrate Safely</h2>
        </header>

        <h1 className="pageTitle">Choose Event Type</h1>
        <button id="type" class="button">
          <Link to={{ pathname: "/virtualplatform" }}>Virtual</Link>
        </button>

        <button id="type" class="button">
          <Link to={{ pathname: "/ipchoose" }}>In-person</Link>
        </button>
      </div>
    );
  }
}

export default ChooseEventType;
