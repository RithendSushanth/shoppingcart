import React from 'react';

function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button className="btn btn-danger col-2" onClick={props.handleReset}>Reset</button>
      <div className="col-8 bg-dark text-white text-center">Total Amount: {props.totalAmount}</div>
      <button className="btn btn-primary col-2" onClick={props.handlePayNow}>Pay Now</button>
    </div>
  );
}

export default Footer;
