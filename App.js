import React from 'react';
import './App.css';

import Cart from './cart';
import Product from './product';

class App extends React.Component {
  
  render(){ 
  return (
    <div className="App">
      <header className="header">
        <h1>Shopping Cart</h1>
      </header>
      <div id="vue">
        <Cart></Cart>
        <h1>Products</h1>
        <Product></Product>
        <div className="modalWrapper">
          <div className="prevProduct">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="nextProduct">
            <i className="fa fa-angle-right"></i>
            </div>
            <div className="overlay"></div>
            <div className="modal">
              <i className="close fa fa-times"></i>
            <div className="imageWrapper">
              <div className="image"></div>
              </div>
              <div className="name"></div>
              <div className="description"></div>
              <div className="details"></div>
              <h3 className="price">.</h3>
              <label htmlFor="modalAmount">QTY</label>
              <input id="modalAmount" className="amount" />
                <button>Add to Cart</button>
                </div>
                </div>
      </div>
    </div>
  );
}
}

export default App;
