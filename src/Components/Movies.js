import React from "react";
import "./AddItemStyle.css";
const Movies = (props) => {
  return (
    // <div className="movieflex">
    <div className="moviediv">
      <p className="moviep">{props.title}</p>

      <img className="movieimg" src={props.Poster} alt="demo img" />

      <p style={{ fontWeight: "bold" }}>{props.year}</p>
    </div>
    // </div>
  );
};

export default Movies;
