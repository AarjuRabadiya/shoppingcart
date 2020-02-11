import React from 'react';
import CartItems from './cartItems';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits, deleteCart} from '../actions/cartActions';

class Cart extends React.Component {
  renderCart=()=> {
    return (
      <>
              {
               this.Show()} 
              </>
    );
  }
 
  buttonsArray=()=>{  
    return(
      <>
        <button className="clearCart" onClick={this.props.deleteCart.bind(this)}>Clear Cart</button>
      </>

    )
  }
 Show=()=>{
   if(this.props.cart.length===0){
    return(
    <></>
    )
   }
   else{
    return(
      
      <div className="cart-items">
        <table className="cartTable">
        <tbody>
         {this.cartList()}
        </tbody>
        </table>
        <h4 className="cartSubTotal">{this.cartTotal()}</h4>
        {this.buttonsArray()}
       <table>
       </table>
      </div>
    
    )
   }
    
  }
  handleDeleteFromCart=(id)=> {
    this.props.deleteFromCart({id})
  }
  handleDeductUnit=(id)=> {
    let units = -1;
    this.props.updateItemUnits({id, units})
  }
  handleAddUnit=(id)=> {
    let units = 1;
    this.props.updateItemUnits({id, units})
  }
  
  cartList=()=> {
    return (
        this.props.cart.map(cartItem => {
          return (
              <CartItems key={cartItem.id}
                        cartItem={cartItem}
                        onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                        onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
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

cartTotal=()=> {
    return (
        <div>
          <div>TOTAL: $ {(Math.round(this.totalAmount(this.props.cart) * 100) / 100).toFixed(2)}</div>
        </div>
    );
}
totalAmount=(cartArray)=> {
    return cartArray.reduce((acum, item) => {
        acum += item.price * item.units;
        return acum;
    }, 0);
}
cartTex=()=> {
  return (
      <>
        {this.totalUnit(this.props.cart)*1.13}
      </>
  );
}

totalFinal=() =>{
  return (
      <>
          {this.totalAmount(this.props.cart)+this.totalUnit(this.props.cart)*1.13}
      </>
  )
}
render(){
  console.log(this.props.val)
        return (
            <>
                {this.renderCart()}
            </>
        );
    }
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
  }
function mapActionsToProps(dispatch) {
  return bindActionCreators({
    deleteFromCart,
    updateItemUnits,
    deleteCart,
  }, dispatch);
  }
  
export default connect(mapStateToProps, mapActionsToProps)(Cart);