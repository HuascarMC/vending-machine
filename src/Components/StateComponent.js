import React from 'react';

class StateComponent extends React.Component {
  render() {
    return(
      <div className="state-wrapper">
        <p className="title">state</p>
        <p className="state-text">In Stock: {JSON.stringify(this.props.state.transactionState.stockInventoryState) } </p>
        <p className="state-text">Enough change: {JSON.stringify(this.props.state.transactionState.coinInventoryState) } </p>
        <p className="state-text">Enough balance: {JSON.stringify(this.props.state.transactionState.balanceState) } </p>
      </div>
    );
  }
}

export default StateComponent;
