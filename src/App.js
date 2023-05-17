import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 9999,
      name: "Iphone 14 pro max",
      quantity: 0
    },
    {
      price: 9999,
      name: "Samsung S23 Ultra",
      quantity: 0
    },
    {
      price: 9999,
      name: "Oppo Reno 10",
      quantity: 0
    }
  ];

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleReset = () => {
    setProductList(products);
    setTotalAmount(0);
  };

  const handlePayNow = () => {
    // Implement your logic for handling the payment
    console.log('Payment processed!');
  };

  const incQuant = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decQuant = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <main className="container mt-5">
          <AddItem addItem={addItem} />
          <ProductList
            productList={productList}
            incQuant={incQuant}
            decQuant={decQuant}
            removeItem={removeItem}
          />
        </main>
      </div>
      <Footer
        totalAmount={totalAmount}
        handleReset={handleReset}
        handlePayNow={handlePayNow}
      />
    </div>
  );
}

export default App;
