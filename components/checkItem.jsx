import React from 'react';

class CheckItems extends React.Component {
    render(){
return(
    
      <tr>
        <td className="align-center">{this.props.cartView.id}</td>
        <td>{this.props.cartView.name}</td>
        <td>{this.props.cartView.description}</td>
        <td className="align-right">{this.props.cartView.units}</td>
        <td className="align-right">${this.props.cartView.price}</td>
       </tr>
    
)
}
}
export default CheckItems;