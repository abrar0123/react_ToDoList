import React from "react";
import "../comp1/toolstyle.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
const tools = [
  { name: "QA Tool", id: 1, price: 25000, purpose: "Reserach Methodologies" },
  {
    name: "Nasa Tool",
    id: 2,
    price: 35000,
    purpose: "Reserach Methodlogies",
  },
  {
    name: "Military Tool",
    id: 3,
    price: 76300,
    purpose: "Military Reserach",
  },
];
const getdata = JSON.parse(localStorage.getItem("keycode201"), tools);
const AddRecF = () => {
  const [addtool, setaddtool] = useState(getdata);
  const [tname, settname] = useState();
  const [price, setprice] = useState();
  // const purpose = "for research";
  let id = 10;
  useEffect(() => {
    localStorage.setItem("keycode201", JSON.stringify(addtool));
  }, [addtool]);
  const addrecord = (a, b) => {
    // try {
    //   setaddtool({ tname, price, purpose, id });
    //   console.log("data are " + JSON.stringify(addtool));
    // } catch (error) {
    //   console.log("error are here " + error);
    // }
    if (tname && price) {
      let tool = [...addtool];
      tool.push({
        name: a,
        price: b,
        purpose: "for research",
        // id: id,
      });
      setaddtool(tool);
      //  setaddtool("");
    } else {
      alert("Don't allows Empty Record ?");
    }
    console.log("fun runnung here " + Object.values(addtool));
  };
  const deletedata = (i) => {
    let dtool = [...addtool];
    dtool.splice(i, 1);
    setaddtool(dtool);
  };
  const handle = (c) => {
    if (c.key === "Enter") {
      addrecord();
    }
  };
  const counter = useRef(0);
  const domAccess = useRef();
  let Previousstate = useRef("");
  useEffect(() => {
    counter.current = counter.current + 1;
    handeldom();
  });
  useEffect(() => {
    Previousstate.current = tname;
  }, [tname]);
  const handeldom = () => {
    // domAccess.current.focus();
    // domAccess.current.value = "dgt record";
    domAccess.current.style.color = "green";
    domAccess.current.style.backgroundColor = "white";
  };
  return (
    <>
      <div className="fcheader">
        <h1>Research Tools</h1>
      </div>
      <div className="fcflex">
        <div className="fcdiv1">
          <h4>
            Use Ref Running counts here
            <span style={{ color: "green", fontWeight: "500" }}>
              {counter.current}
            </span>
            Times
          </h4>
          <h4>
            Use Ref Previous State
            <span style={{ color: "green", fontWeight: "500" }}>
              {Previousstate.current}
            </span>
          </h4>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="addrecdiv">
          <input
            ref={domAccess}
            type="text"
            onKeyPress={(e) => handle(e)}
            name="toolname"
            id=""
            value={tname}
            placeholder="Enter Tool Name"
            onChange={(e) => settname(e.target.value)}
          />

          <input
            onDrop={() => console.log("ddjk")}
            type="text"
            onKeyPress={(e) => handle(e)}
            name="toolprice"
            onCopy={() => alert("text copied")}
            id=""
            placeholder="Enter Tool Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <button
            className="btn2"
            draggable
            onDrag={() => console.log("kkdj")}
            onDoubleClick={() => alert("double click dont allowed here !")}
            onClick={() => addrecord(tname, price)}
          >
            Add Record
          </button>
          {/* <button className="btn2" onClick={handeldom}>
            UseRef
          </button> */}
        </div>
      </form>
      <div className="fcflex">
        {addtool.map((e, i) => {
          return (
            <div key={i} className="fcdiv">
              <p>{i}</p>
              <p className="fcp">{e.name}</p>
              <p className="fcp">{e.price}</p>
              <p className="fcp">{e.purpose}</p>
              <button className="btn2" onClick={() => deletedata(i)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddRecF;
