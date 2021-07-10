import React, { Component } from "react";
import { Link } from "react-router-dom";

class IPChoose extends Component {
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
          <Link to={{ pathname: "/iphowmany" }}>Use our diagnostic</Link>
        </button>

        <button>
          <Link to={{ pathname: "/ipfoodchoose" }}>
            No thanks, I'll add them myself.
          </Link>
        </button>
      </div>
    );
  }
}

export default IPChoose;
