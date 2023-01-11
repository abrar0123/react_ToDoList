import React from "react";
import "./AddItemStyle.css";

import Movies from "./Movies";
import movie from "./movies.json";

export default function MovieMap() {
  return (
    <>
      <div className="movieheader">
        <h1>All Latest Movies </h1>
      </div>
      <div className="movieflex">
        {movie.map((element) => {
          return (
            <Movies
              key={element.imdbID}
              title={element.Title}
              year={element.Year}
              Poster={element.Poster}
            />
          );
        })}
      </div>
    </>
  );
}
