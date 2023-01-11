import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Productlist.js";
import Footer from "./Components/Footer.js";
import React, { useState } from "react";
import AddItem from "./Components/AddItem";
import { createContext } from "react";
import Acomp from "./Components/comp1/contextcomp/Acomp";
import Error from "./Components/comp1/error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRecF from "./Components/Movies/AddRecF";
import ReactApi from "./Components/reactapi/ReactApi";
const AppState = createContext();
const AppState1 = createContext();

function App() {
  // const a = <h1> Metaphor Todo List Task </h1>;
  // components
  const Products = [
    // we creates an array from collection of objects
    {
      price: 22300,
      name: "Vivo Y90 ",
      quantity: 0,
    },
    {
      price: 32500,
      name: "Vivo S1 ",
      quantity: 0,
    },
    {
      price: 37500,
      name: "Galaxy S9 ",
      quantity: 0,
    },
    {
      price: 45200,
      name: "Reno Pro ",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(Products); // this is our hook.
  let [totalamount, settotalamount] = useState(0);

  //  setProductList > pass value > update quant,
  //  productList >

  const incquntity1 = (ind) => {
    // ind just contains position of object data
    let newproductlist = [...productList]; // spread function> get  combine > array
    console.log("quantity is" + newproductlist[ind].name);

    newproductlist[ind].quantity++; // add 1

    setProductList(newproductlist);
    let ntotalamount = totalamount;
    ntotalamount += newproductlist[ind].price;
    // console.log("my checked function is :"+ newproductlist[ind].price)
    settotalamount(ntotalamount);
  };
  const resetquant = () => {
    let nplist = [...productList];
    nplist.map((p) => {
      p.quantity = 0;
    });
    setProductList(nplist);
    settotalamount(0);
  };
  const dec_quantity = (ind) => {
    let newproductlist = [...productList]; // spread fun > get  combine > array
    let ntotalamount = totalamount;
    if (newproductlist[ind].quantity > 0) {
      newproductlist[ind].quantity--;
      ntotalamount -= newproductlist[ind].price;
    }
    settotalamount(ntotalamount);
    setProductList(newproductlist);
  };
  const addItem = (name, price) => {
    let newproductlist = [...productList];
    newproductlist.push({
      price: price,
      name: name,
      quantity: 1,
    });
    setProductList(newproductlist);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let ntotalamount = totalamount;
    ntotalamount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1); // delete this record
    setProductList(newProductList);
    settotalamount(ntotalamount);
  };
  const pop = "web developer ";
  const pop1 = "software  developer ";

  return (
    <>
      <AppState.Provider value={incquntity1}>
        <AppState1.Provider value={dec_quantity}>
          <Router>
            {/* navbar page 1 */}
            <Navbar />

            {/* additem page 2*/}

            <Routes>
              <Route path="/n" element={<AddItem addItem={addItem} />} />
              <Route path="/api" element={<ReactApi />} />

              <Route path="/ResearchTools" element={<AddRecF />} />

              {/* <main className="container mt-5"> */}
              <Route
                path="/plist"
                element={
                  <ProductList
                    productList={productList}
                    incquntity={incquntity1}
                    // dquntity={dquntity1}
                    removeItem={removeItem}
                  />
                }
              />

              {/* <div style={{ textAlign: "center", paddingBottom: "20px"}}> {a}</div> */}

              {/* productslist page 3 */}

              {/* </main> */}
              <Route path="*" element={<Error />} />
              <Route path="/m" element={<Acomp />} />

              <Route
                path="/add"
                element={
                  <Footer totalamount={totalamount} resetquant={resetquant} />
                }
              />
              {/* footer page 4 more pages */}
            </Routes>
          </Router>
        </AppState1.Provider>
      </AppState.Provider>
      ;
    </>
  );
}

export default App; // use in another files
export { AppState };
export { AppState1 };
