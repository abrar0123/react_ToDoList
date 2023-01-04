import React from 'react'
import Product from './Product.js'
export default function ProductList(props) { // ( {product})
    

  const a =<h1> My New Journey is Started </h1>


  return (
        
    props.productList.length>0?
    props.productList.map(  (prd,i)=>{ // i position 
        return <Product 
        product={prd} 
        //key ={i} 
        incquntity2={props.incquntity} 
        in={i}
        dquntity2={props.dquntity} 
        removeItem={props.removeItem}
        />
    } )  :<h1>       Please Add atleast 5 products in list      </h1>
  );
  
}


