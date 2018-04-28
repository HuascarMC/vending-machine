import React from 'react';

class OrderButtonComponent extends React.Component {

  pressReturn() {
    this.props.updateChange(this.props.balance);
    this.props.updateBalance(0.00);
  }

  pressPush() {
    this.props.order();
  }

  render() {
    return(
      <div className="order-button-wrapper">
        <button className="order-button" onClick={this.pressReturn.bind(this) }>RETURN</button>
        <button className="order-button">PUSH</button>
      </div>
    );
  }
}

export default OrderButtonComponent;
