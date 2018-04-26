import React from 'react';
import ItemComponent from '../Components/ItemComponent'

class OrderContainer extends React.Component {


  render() {
    return(
      <div className="order-wrapper">
        <ItemComponent />
      </div>
    );
  }
}

export default OrderContainer;
