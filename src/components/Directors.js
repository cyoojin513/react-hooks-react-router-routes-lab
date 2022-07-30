import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((item => 
        <div key={item.name}>
          <h3>{item.name}</h3>
          <h5>Movies: </h5>
          <ul>{item.movies.map((movies => 
            <li key={movies}>{movies}</li>))}</ul>
          <br></br>
        </div>
      ))}
    </div>
  )
}

export default Directors;


