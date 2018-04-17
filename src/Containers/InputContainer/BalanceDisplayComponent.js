import React from 'react';

class BalanceDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      balance: 0
    }
  }

  render() {
    // Renders a form to get user input and passes the value of state to props table container.

    return(
      <div className="balance-display">
        <p className="balance-text">${this.state.balance}</p>
      </div>
      );
    }
  }


  export default BalanceDisplay;
