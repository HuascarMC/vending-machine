import React from 'react';
import BalanceDisplayComponent from './BalanceDisplayComponent'

class InputComponent extends React.Component {
  render() {
    return(
      <div>
        <BalanceDisplayComponent balance={ this.props.balance } />
        <div className="input-wrapper">
        <ul className="input-box">
          <li><p className="coin-value">$0.01<button onClick={ ()=>this.props.updateBalance(0.01) } className="coin bronze"></button></p></li>
          <li><p className="coin-value">$0.05<button onClick={ ()=>this.props.updateBalance(0.05) } className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.10<button onClick={ ()=>this.props.updateBalance(0.1) } className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.25<button onClick={ ()=>this.props.updateBalance(0.25) } className="coin silver"></button></p></li>
          <li><p className="coin-value">$1.00<button onClick={ ()=>this.props.updateBalance(1.00) } className="coin gold"></button></p></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default InputComponent;
