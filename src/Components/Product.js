import React from "react";
import "./AddItemStyle.css";
import { useContext } from "react";
import { AppState } from "../App";
import { AppState1 } from "../App";

export default function Product(props) {
  const stack_plus = useContext(AppState);
  const stack_min = useContext(AppState1);

  return (
    <div className="productstyle">
      <div className="row">
        <div className="col-5">
          <h3>
            {props.product.name}
            <span className="badge bg-secondary">
              Rs. {props.product.price}
            </span>
          </h3>
        </div>

        <div className="col-3">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                // props.dquntity2(props.(in);
                stack_min(props.in);
              }}
            >
              -
            </button>

            <button type="button" class="btn btn-warning">
              {props.product.quantity}
            </button>

            <button
              type="button"
              class="btn btn-success"
              onClick={() => {
                stack_plus(props.in);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2 mt-1">
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {props.product.quantity * props.product.price}
          </p>
        </div>
        <button
          className="col-2 btn btn-danger mb-2"
          onClick={() => {
            props.removeItem(props.in);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
Product.defaultProps = {
  prd: { price: 250, name: "Colgate ", quantity: 0 },
};
