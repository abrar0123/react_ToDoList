import React from "react";
import { AppState } from "../../../App";
import { useContext } from "react";
export default function Acomp() {
  const passdata = useContext(AppState);
  return <div>DevOps Engineer {passdata.Products.name} </div>;
}
