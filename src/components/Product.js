import React from 'react';

function Product(props) {
  return (
    <div className='row mt-3 align-items-center'>
      <div className="col-6">
        <h2>{props.product.name}</h2>
        <span className="badge bg-secondary">Rs.{props.product.price}</span>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn btn-danger" onClick={() => props.decQuant(props.index)}>-</button>
          <button type="button" className="btn btn-warning">{props.product.quantity}</button>
          <button type="button" className="btn btn-success" onClick={() => props.incQuant(props.index)}>+</button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <div className="col-1">
        <button className='btn btn-danger' onClick={() => props.removeItem(props.index)}>Remove</button>
      </div>
    </div>
  );
}

export default Product;
