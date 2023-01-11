import React from "react";
import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [state, setstate] = useState([]);

  const GetApiData = async () => {
    let call = await fetch(url);
    call = await call.json();
    setstate(call);
  };
  useEffect(() => {
    GetApiData();
  }, []);
  return [state];
}
