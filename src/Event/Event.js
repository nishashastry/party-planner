import React from "react";

const event = (props) => {
  const style = {
    backgroundColor: "whitesmoke",
    border: "2px solid whitesmoke",
    width: "auto",
    height: "auto",
    clear: "both",
    color: "#333333"
  };

  return (
    <div className="event" style={style}>
      <p className="column">{props.eventName}</p>
      <p className="column">{props.eventTime}</p>
      <button id="view" class="button" className="column">
        View
      </button>
    </div>
  );
};

export default event;
