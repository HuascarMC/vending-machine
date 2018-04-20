import React from 'react';

class BalanceDisplay extends React.Component {
  render() {
    return(
      <div className="balance-display">
        <p className="balance-text">${this.props.balance.toFixed(2)}</p>
      </div>
    );
  }
}


export default BalanceDisplay;
