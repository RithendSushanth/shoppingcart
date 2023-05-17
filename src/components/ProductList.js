import React from 'react';
import Product from './Product';

function ProductList(props) {
  return (
    <div>
      {props.productList.length > 0 ? (
        props.productList.map((product, index) => (
          <Product
            key={index}
            product={product}
            incQuant={props.incQuant}
            decQuant={props.decQuant}
            removeItem={props.removeItem}
            index={index}
          />
        ))
      ) : (
        <h1>𝓟𝓵𝓮𝓪𝓼𝓮 𝓐𝓭𝓭 𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓼 𝓘𝓷 𝓣𝓱𝓮 𝓒𝓪𝓻𝓽</h1>
      )}
    </div>
  );
}

export default ProductList;
