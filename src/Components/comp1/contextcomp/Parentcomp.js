import React from "react";
import { createContext } from "react";
export default function Parentcomp() {
  const Appstate = createContext();
  return <Appstate.Provider passdata="abrar-hussain"></Appstate.Provider>;
}
