import React from "react";
import "../App.css";

function Person(props) {
  return (
    <div className="App-shadow">
      <p onClick={props.clicked}>Abiodun Emmanuel {props.name}</p>
      <input type="text" onChange={props.changeName} />
    </div>
  );
}

export default Person;
