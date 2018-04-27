import React from 'react';

class OrderButtonComponent extends React.Component {
  render() {
    return(
      <div className="order-button-wrapper">
        <button className="order-button">RETURN</button>
        <button className="order-button">PUSH</button>
      </div>
    );
  }
}

export default OrderButtonComponent;
