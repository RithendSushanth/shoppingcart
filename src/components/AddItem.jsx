import React, { useState } from 'react';



function AddItem(props) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(productName, productPrice);
    setProductName('');
    setProductPrice(0);
  };

  return (
    <form className="row mb-5 d-flex flex-row justify-content-between align-items-center w-100 h-100" onSubmit={handleSubmit}>
      <div className="mb-3 col-4">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          aria-describedby="emailHelp"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="inputPrice" className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          id="inputPrice"
          name="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
      </div>
      <div className=''>
      <button type="button" class="btn btn-success w-25 h-25">add</button>
      </div>
    </form>
  );
}

export default AddItem;
