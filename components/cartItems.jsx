import React from 'react';

class CartItems extends React.Component {
  minus=()=>{
    if(this.props.cartItem.units===1){
      this.props.handleDeleteFromCart()
    }
    else{
      this.props.onDeductUnit()
    }
  }  
  render(){
      
return(
    <>
      <tr className="product" >
        <td className="align-left">
          <div className="containerimage">
            <img className="cartImage" src={this.props.cartItem.image} alt="img"></img>
            <div className="middleclose" onClick={() => this.props.handleDeleteFromCart()}>
              <i className="close fa fa-times closetext" aria-hidden="true"></i>
            </div>
            {/* <i className="close fa fa-times" onClick={() => this.props.handleDeleteFromCart()}></i> */}
          </div></td>
        <td className="align-center"><button onClick={() => this.minus()}><i className="close fa fa-minus"></i></button></td>
        <td className="align-center">{this.props.cartItem.units}</td>
        <td className="align-center"><button onClick={() => this.props.onAddUnit()}><i className="close fa fa-plus"></i></button></td>
        <td className="align-center">{this.props.cartItem.name}</td><td>${this.props.cartItem.price}</td>
      </tr>
    </>
)
}
}
export default CartItems;