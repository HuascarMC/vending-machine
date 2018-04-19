import React from 'react';

class TransactionStateComponent extends React.Component {
  render() {
    return(
      <div className="transaction-state-container">
        <p className="title-transaction-state">Transaction State: </p>
        <div className="transaction-state">
          <p className="state-title">In Stock: {JSON.stringify(this.props.state.state.stockInventoryState) } </p>
          <p className="state-title">Enough change: {JSON.stringify(this.props.state.state.coinInventoryState) } </p>
          <p className="state-title">Enough balance: {JSON.stringify(this.props.state.state.balanceState) } </p>
        </div>
      </div>

    );
  }
}

export default TransactionStateComponent;
