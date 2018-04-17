import React from 'react';

class BalanceDisplay extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    // Renders a form to get user input and passes the value of state to props table container.

    return(
      <div className="balance-display">
        <p className="balance-text">${this.props.balance.toFixed(2)}</p>
      </div>
      );
    }
  }


  export default BalanceDisplay;
