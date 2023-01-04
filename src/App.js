import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Productlist.js";
import Footer from "./Components/Footer.js";
import React, { useState } from "react";
import AddItem from "./Components/AddItem";

function App() {

  const a =<h1> My New Journey is Start </h1>
  // components
  const Products = [
    // we creates an array from collection of objects
    {
      price: 9999,
      name: "Iphone 13 pro ",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Iphone 14 pro ",
      quantity: 0,
    },
    {
      price: 32500,
      name: "Vivo S1     \t",
      quantity: 0,
    },
    {
      price: 2000,
      name: "Sqlite Course ",
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
  const dquntity1 = (ind) => {
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
  return (
    <>
    
      <Navbar />
      <AddItem addItem={addItem} />

     
      <main className="container mt-5">
      
      <div style={{textAlign:"center",paddingBottom:"20px"}}> {a}</div>
      
        <ProductList
          productList={productList}
          incquntity={incquntity1}
          dquntity={dquntity1}
          removeItem={removeItem}
        />
      </main>
      <Footer totalamount={totalamount} resetquant={resetquant} />
    </>
  );
}

export default App; // use in another files
