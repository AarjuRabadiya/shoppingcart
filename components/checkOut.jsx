import React from 'react';
import {connect} from 'react-redux';
import CheckItem from './checkItem';

class CheckOut extends React.Component {
    constructor() {
        super();
        this.state = {
          checkOut: false
        }
      }
      onClickCheck=(e)=>{
        e.preventDefault();
        this.setState({checkOut: !this.state.checkOut})
      }
    cartList=()=> {
        return (
            this.props.cart.map(cartView => {
              return (
                  <CheckItem key={cartView.id}
                  cartView={cartView} />
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
              <div>${(Math.round(this.totalAmount(this.props.cart) * 100) / 100).toFixed(2)}</div>
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
              {(Math.round(this.totalUnit(this.props.cart)*1.13 * 100) / 100).toFixed(2)}
            </>
        );
    }
    
    totalFinal=()=> {
        let val=this.totalAmount(this.props.cart)+this.totalUnit(this.props.cart)*1.13
        return (
            <>
                {(Math.round(val * 100) / 100).toFixed(2)}
            </>
        )
    }
    close=()=>{
        this.setState({checkOut:false})
      }
    Check=()=>{
        return(
            <div className="modalWrapper">
                <div className="overlay"></div>
                <div className="modal checkout">
                    <i className="close fa fa-times"  onClick={this.close.bind(this)}></i>
                    <h1>Checkout</h1>
                    <div>We accept: <i className="fa fa-stripe"></i> 
                    <i className="fa fa-cc-visa"></i> 
                    <i className="fa fa-cc-mastercard"></i> 
                    <i className="fa fa-cc-amex"></i> 
                    <i className="fa fa-cc-discover"></i>
                    </div><br/>
                    <h3> Subtotal: {this.cartTotal()} </h3>
                    <h3> Tax: ${this.cartTex()} </h3>
                    <h1> Total: ${this.totalFinal()} </h1><br/>
                    <div>This is where our payment processor goes</div>
                </div>
            </div>
        )
    }
  render() {
      if (this.props.cart.length !== 0) {
        return (
            <>
            <h1>Check out area</h1>
            <div className="checkout-area">
                <span> {this.cartUnit()} </span>
                <i className="fa fa-shopping-cart"></i>
                <table>
                <thead>
                    <tr>
                        <th className="align-center">SKU</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="align-right">Amount</th>
                        <th className="align-right">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.cartList()}
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="align-right">Subtotal:</td>
                        <td className="align-right">{this.cartTotal()}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="align-right">Tax:</td>
                        <td className="align-right">${this.cartTex()}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="align-right vert-bottom">Total:</td>
                        <td className="align-right vert-bottom"><h2>${this.totalFinal()}</h2></td>
                    </tr>
                </tbody>
                </table>
                <button onClick={this.onClickCheck.bind(this)}>Checkout</button>
            </div>
                {this.state.checkOut && this.Check()}
            </>
        );
    }
    return (
    <>
    </>
    );
  }
}
function mapStateToProps(state) {
    return {
      cart: state.cart
    }
}
export default connect(mapStateToProps)(CheckOut);