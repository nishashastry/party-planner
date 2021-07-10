import React, { Component } from "react";
import { Link } from "react-router-dom";

class VirtualChoose extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2> Let's Celebrate Safely</h2>
        </header>
        <h1 className="pageTitle">Choose Activities</h1>

        <button class="button">
          <Link to={{ pathname: "/virtualactivitydiagnostic" }}>
            Use our diagnostic
          </Link>
        </button>

        <button class="button">
          <Link to={{ pathname: "/" }}>No thanks, I'll add them myself.</Link>
        </button>
      </div>
    );
  }
}

export default VirtualChoose;
