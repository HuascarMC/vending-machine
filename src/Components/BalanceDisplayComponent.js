import React from 'react';

class BalanceDisplay extends React.Component {
  render() {
    return(
      <div className="display machine-display">
        <p className="display-text">{ this.props.value }</p>
      </div>
    );
  }
}


export default BalanceDisplay;
