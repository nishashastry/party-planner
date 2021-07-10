import React, { Component } from "react";
import { Link } from "react-router-dom";

class IPhowmany extends Component {
  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Let's Celebrate Safely</h2>
        </header>
        <h1 className = "pageTitle">Guest Count</h1>
        <h1 className="body">How many people?</h1>

        <input type="number" width="200%" />

        <button>
          <Link to={{ pathname: "/ipactivitydiagnostic" }}>Next</Link>
        </button>

        <h3>The CDC suggests recommends gatherings virtual, if possible.</h3>
        <p>
          Executive Order 20-74 requires events to have no more than 10 people
          indoors, and 25 people outdoors.
        </p>
        <p>
          Remember to keep at least six feet apart, and wear a mask, to reduce
          the chance of transmission.
        </p>
      </div>
    );
  }
}

export default IPhowmany;
