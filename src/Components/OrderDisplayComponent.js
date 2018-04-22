import React from 'react';

class OrderDisplayComponent extends React.Component {
  render() {
    return(
      <div>
        <p className="title">choice</p>
        <div className="choice" >{this.props.state.item}</div>
        <p className="title">balance</p>
        <div className="choice" >{this.props.state.balance.toFixed(2)}</div>
      </div>
    );
  }
}

export default OrderDisplayComponent;
