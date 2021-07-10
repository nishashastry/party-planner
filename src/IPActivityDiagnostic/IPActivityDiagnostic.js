import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Druthers from "druthers";
import { Question } from "react-multiple-choice";
import { Option } from "react-multiple-choice";
import { Test } from "react-multiple-choice";
import { QuestionGroup } from "react-multiple-choice";
import "../VirtualPlatform/VirtualPlatform.css";
import "./IPActivityDiagnostic.css";
import { geolocated } from "react-geolocated";

class IPActivityDiagnostic extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Let's Celebrate Safely</h2>
        </header>

        <h1 className="pageTitle">In-Person Activity Diagnostic</h1>

        <div className="column">
          <p>You might like:</p>
          <img
            src="https://kevin.games/assets/cache_image/games/skribbl-io_200x200_98b.jpg"
            alt="W3Schools.com"
          />
        </div>

        <Test
          onOptionSelect={(selectedOptions) =>
            this.setState({ selectedOptions })
          }
        >
          <div className="better row">
            <div className="column">
              <p>Age Group</p>
              <div className="fixit">
                <Test>
                  <QuestionGroup questionNumber={0}>
                    <Option value="0">Children</Option>
                    <Option value="2">Preteen</Option>
                    <Option value="3">Teens</Option>
                    <Option value="4">Young Adults</Option>
                    <Option value="5">Adults</Option>
                    <Option value="6">Seniors</Option>
                  </QuestionGroup>
                </Test>
              </div>
            </div>

            <div className="column">
              <p>Interests</p>
              <div className="fixit">
                <Test>
                  <QuestionGroup questionNumber={1}>
                    <Option value="0">Games</Option>
                    <Option value="1">Icebreakers</Option>
                    <Option value="2">Community</Option>
                    <Option value="3">Trivia</Option>
                    <Option value="4">Puzzle/ Strategy</Option>
                  </QuestionGroup>
                </Test>
              </div>
            </div>
          </div>
        </Test>

        <button>
          <Link to={{ pathname: "/guestlist" }}>Next</Link>
        </button>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(IPActivityDiagnostic);
