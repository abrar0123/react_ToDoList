import React from 'react'

export default function Product(props) {

  
  return (
    <div className='row'>
        <div className='col-5'>
        <h2>{props.product.name} <span className="badge bg-secondary">
        Rs. {props.product.price}</span></h2>
        </div>

        
        <div className='col-3'>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger"
  onClick={()=>{

    props.dquntity2(props.in)
    
  }}
  >
    -
    </button>

  <button type="button" class="btn btn-warning">
    {props.product.quantity}
  </button>

  
  <button type="button" class="btn btn-success" onClick={()=>{ 
    props.incquntity2(props.in)}}>
    +
    
    </button>
</div>

        </div>
        <div className='col-2 mt-3'>
            {props.product.quantity*props.product.price}
        </div>
        <button className='col-2 btn btn-danger mb-2' onClick={() =>
          {props.removeItem(props.in)}}>
          Remove
        </button>
    </div>
  )
}
