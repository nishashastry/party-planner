import React, { Component } from "react";
import { Link } from "react-router-dom";

class IPFoodChoose extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Choose Activities</h2>
        </header>
        <h1 className="body">Choose Activities</h1>

        <button>
          <Link to={{ pathname: "/" }}>Use our diagnostic</Link>
        </button>

        <button>
          <Link to={{ pathname: "/" }}>No thanks, I'll add them myself.</Link>
        </button>
      </div>
    );
  }
}

export default IPFoodChoose;
