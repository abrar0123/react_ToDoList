import React from "react";
import MovieMap from "./MovieMap";
import AddRecF from "./Movies/AddRecF";
export default function Footer(props) {
  const orderdone = () => {
    alert("Thanks Your Order is Placed Successfully ");
    props.resetquant();
  };
  return (
    <>
      <div className="row fixed-bottom">
        <button
          className="btn btn-danger col-2"
          onClick={() => {
            props.resetquant();
          }}
        >
          Reset{" "}
        </button>
        <div className="col-8 bg-dark text-white text-center">
          {props.totalamount}
        </div>

        <button className="btn btn-primary col-2" onClick={orderdone}>
          {" "}
          Pay Now{" "}
        </button>
      </div>
      <MovieMap />
    </>
  );
}
