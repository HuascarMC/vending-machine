import React from 'react';

class StateComponent extends React.Component {
  render() {
    return(
      <div className="state-wrapper">
        <p className="title">state</p>
        <p className="state-title">In Stock: {JSON.stringify(this.props.state.transactionState.stockInventoryState) } </p>
        <p className="state-title">Enough change: {JSON.stringify(this.props.state.transactionState.coinInventoryState) } </p>
        <p className="state-title">Enough balance: {JSON.stringify(this.props.state.transactionState.balanceState) } </p>
      </div>
    );
  }
}

export default StateComponent;
