import React from "react";

export default function Movie(props) {
  return (
    <div className="card">
      <div className="container">
        <img
          src="https://bit.ly/3biMP8J"
          width="100%"
          height="230px"
          alt="john"
        />
        <h2>{props.name}</h2>
        <h4>
          {props.genre}-{props.year}
        </h4>
      </div>
    </div>
  );
}
