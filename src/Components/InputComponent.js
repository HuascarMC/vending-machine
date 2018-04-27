import React from 'react';

class InputComponent extends React.Component {
  render() {
    return(
      <div className="input-wrapper">
        <ul>
          <li><p className="coin-value">$0.01<button className="coin bronze"></button></p></li>
          <li><p className="coin-value">$0.05<button className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.10<button className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.25<button className="coin silver"></button></p></li>
          <li><p className="coin-value">$1.00<button className="coin gold"></button></p></li>
        </ul>
      </div>
    );
  }
}

export default InputComponent;
