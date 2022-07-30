import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((item) => 
        <div key={item.title}>
          <ul>
            <li>Title: {item.title}</li>
            <li>Time: {item.time}</li>
            <li>Genres:
              <ul>{item.genres.map((genre => 
                <li key={genre}>{genre}</li>))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Movies;

