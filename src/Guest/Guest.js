import React from "react";

const Guest = (props) => {
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
      <p className="column">{props.guestName}</p>
      <p className="column">{props.guestEmail}</p>
      <p className="column">{props.guestStatus}</p>
    </div>
  );
};

export default Guest;
