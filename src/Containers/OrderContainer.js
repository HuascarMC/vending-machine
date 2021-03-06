import React from 'react';
import ItemComponent from '../Components/ItemComponent'
import StateComponent from '../Components/StateComponent'

class OrderContainer extends React.Component {


  render() {
    return(
      <div className="order-wrapper">
        <ItemComponent itemImage={ this.props.state.itemImage }/>
        <StateComponent state={ this.props.state.transactionState }/>
      </div>
    );
  }
}

export default OrderContainer;
