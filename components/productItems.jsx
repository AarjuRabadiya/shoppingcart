import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

class ProductItems extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      setId:1
    }
  }
dispachAddToCarts=(product)=>{
    this.props.addToCart(product);
}
  onClick=(e)=>{
    //e.preventDefault();
    let val=this.props.product["id"]-1
    this.setState({
      setId: val
    })
    this.setState({showModal: !this.state.showModal})
  }
  
  onleftClick=(e)=>{
    //console.log(this.props.products.length)
    if(this.state.setId<1){
      let val=this.props.products.length-1;
      this.setState({
        setId: val
      })
    }
    else{
    let val=this.state.setId-1;
    this.setState({
      setId: val
    })
  }
  }

  onrightClick=(e)=>{
    if(this.state.setId>=this.props.products.length-1){
      let val=0;
      this.setState({
        setId: val
      })
    }
    else{
    let val=this.state.setId+1;
    this.setState({
      setId: val
    })
  }
  }

  close=()=>{
    //e.preventDefault();
    this.setState({showModal:false})
  }
  Modal=()=>{
    let id=this.state.setId;
    //let id=1
    //console.log(this.props.products[id]);
    return(
      <div className="modalWrapper">
        <div className="prevProduct">
          <i className="fa fa-angle-left" onClick={(e)=>this.onleftClick(this)}></i>
        </div>
        <div className="nextProduct">
          <i className="fa fa-angle-right" onClick={(e)=>this.onrightClick(this)}></i>
        </div>
        <div className="overlay"></div>
        <div className="modal">
          <i className="close fa fa-times" onClick={this.close.bind(this)}></i>
        <div className="imageWrapper">
          <img className="imageWrapper" src={this.props.products[id]["image"]} alt="img"></img>
          </div>
          <div className="name">{this.props.products[id]["name"]}</div>
          <div className="description">{this.props.products[id]["description"]}</div>
          <div className="details">{this.props.products[id]["details"]}</div>
          <h3 className="price">${this.props.products[id]["price"]}</h3>
          {/* <label htmlFor="modalAmount">QTY</label>
          <input id="modalAmount" className="amount" value="1" readOnly></input> */}
          <button onClick={() => {
          // this.props.handleOnAdd(this.props.product);
          this.dispachAddToCarts(this.props.products[id])
          this.close();
        }}>Add to Cart</button>
            </div>
      </div>
    )
  }
render(){
return(
  <div>
    
      <div className="product">
          <div className="containerimage">
            <img className="image" src={this.props.product.image} alt="img"></img>
            <div className="middle" onClick={(e)=>this.onClick(this)}>
              <i className="fa fa-search-plus text" aria-hidden="true"></i>
            </div>
          </div>
        <div className="name">{this.props.product.name}</div>
          <div className="description">{this.props.product.description}</div>
          <div className="price">${this.props.product.price}</div>
          <button onClick={() => this.props.handleOnAdd(this.props.product)}>Add to Cart</button><br/><br/>
      </div>
      {this.state.showModal && this.Modal()}
  </div>
)
}
}
function mapStateToProps(state) {
  return {
      products: state.products
  }
}
function mapActionsToProps(dispatch) {
  return bindActionCreators({
      addToCart
  }, dispatch);
}
export default connect(mapStateToProps,mapActionsToProps)(ProductItems);