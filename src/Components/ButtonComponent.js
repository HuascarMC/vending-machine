import React from 'react';

class OrderButtonComponent extends React.Component {
  render() {
    return(
      <div className="order-button-wrapper">
        <button className="return">RETURN</button>
        <button className="push">PUSH</button>
      </div>
    );
  }
}

export default OrderButtonComponent;
