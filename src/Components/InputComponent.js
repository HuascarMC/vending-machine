import React from 'react';
import BalanceDisplayComponent from './BalanceDisplayComponent'

class InputComponent extends React.Component {
  render() {
    return(
      <div>
        <BalanceDisplayComponent />
        <div className="input-wrapper">
        <ul className="input-box">
          <li><p className="coin-value">$0.01<button className="coin bronze"></button></p></li>
          <li><p className="coin-value">$0.05<button className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.10<button className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.25<button className="coin silver"></button></p></li>
          <li><p className="coin-value">$1.00<button className="coin gold"></button></p></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default InputComponent;
