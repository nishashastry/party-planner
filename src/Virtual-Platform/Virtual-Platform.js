import React, { Component } from "react";
import { Link } from "react-router-dom";

class VirtualPlatform extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Choose Event Type</h2>
        </header>
        <h1 className="body">Choose Event Type</h1>

        <button>
          <Link to={{ pathname: "/" }}>Virtual</Link>
        </button>

        <button>
          <Link to={{ pathname: "/e" }}>In-person</Link>
        </button>
      </div>
    );
  }
}

export default VirtualPlatform;
