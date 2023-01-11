import React from "react";

import useFetch from "./useFetch";
export default function ReactApi() {
  const [state] = useFetch(
    "https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001"
  );
  return (
    <>
      <div>ReactApi Data get here</div>
      <button>Get Api data</button>
      {state.map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.firstName}</h1>
          </div>
        );
      })}
    </>
  );
}
