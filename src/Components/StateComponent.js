import React from 'react';

class StateComponent extends React.Component {
  render() {
    return(
      <div className="state-wrapper">
        <p className="title">state</p>
        <p className="state-text">In Stock: {JSON.stringify(this.props.state.stockInventoryState) } </p>
        <p className="state-text">Enough change: {JSON.stringify(this.props.state.coinInventoryState) } </p>
        <p className="state-text">Enough balance: {JSON.stringify(this.props.state.balanceState) } </p>
      </div>
    );
  }
}

export default StateComponent;
