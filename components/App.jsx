import React from 'react';
import '../App.scss';

import Cart from './cart';
import CheckOut from './checkOut';
import ProductItems from './productItems';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      popupVisible: false
    }
  }

  handleClick=()=> {
    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }
dispachAddToCart=(product)=>{
    this.props.addToCart(product);
    
}
renderProducts=() =>{
  return (
      this.props.products.map((p) => {
          return (
              <div className='product' xs={12} sm={6} md={4} key={p.id}>
                  <ProductItems handleOnAdd={this.dispachAddToCart.bind(this)} product={p} />
              </div>
          );
      })
  );
}
cartUnit=()=> {
  return (
      <>
        {this.totalUnit(this.props.cart)}
      </>
  );
}
totalUnit=(cartArray)=> {
  return cartArray.reduce((unit, item) => {
      unit+=item.units;
      return unit;
  }, 0);
}
demo=()=>{
  console.log("hi")
  this.setState ({
    popupVisible: false
 });
}
  render(){ 
    console.log(this.state.popupVisible)
  return (
    <div className="App">
      <header className="header" onClick={this.demo}>
        <h1>Shopping Cart</h1>
      </header>
      <div id="vue" >
        <div  className='cart'>
            <div>
                <span className="cart-size">{this.cartUnit()}</span>
                <i className="fa fa-shopping-cart" onClick={this.handleClick}></i>
              </div>
              {this.state.popupVisible && (
          <Cart></Cart> )}
        </div>
        <h1 onClick={this.demo}>Products</h1>
        <div className="products" onClick={this.demo}>
        {this.renderProducts()}
        </div>
        <div onClick={this.demo}>
        <CheckOut></CheckOut>   
        </div>
      </div>
    </div>
  );
}
}
function mapStateToProps(state) {
    return {
        products: state.products,
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart,
    }, dispatch);
}
export default connect(mapStateToProps,mapActionsToProps)(App);
