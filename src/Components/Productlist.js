import React from "react";
import Product from "./Product.js";
import "./AddItemStyle.css";
export default function ProductList(props) {
  // ( {product})

  return (
    <>
      <div className="movieheader">
        <h1>Metaphor Web Project</h1>
      </div>

      {props.productList.map((prd, i) => {
        // props.productList.length > 0 ? (
        // i position
        <div className="moviediv">
          <h1>Metaphor Web Project</h1>
        </div>;
        return (
          <Product
            product={prd}
            //key ={i}
            // incquntity2={props.incquntity}
            in={i}
            // dquntity2={props.dquntity}
            removeItem={props.removeItem}
          />
        );
      })}
    </>
  );

  // ) : (
  //   <h1> Please Add atleast 5 products in list </h1>
  // );
}
