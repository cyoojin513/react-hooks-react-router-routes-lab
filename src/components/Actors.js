import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((item => 
        <div key={item.name}>
          <h3>{item.name}</h3>
          <h5>Movies: </h5>
          <ul>{item.movies.map((item) =>
            <li key={item}>{item}</li>
            )}</ul>
        <br></br>
        </div>
      ))}
    </div>
  )
}

export default Actors;