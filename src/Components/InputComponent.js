import React from 'react';

class InputComponent extends React.Component {
  render() {
    return(
      <div className="input-wrapper">
        <ul>
          <li><p className="coinValue">$0.01<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
          <li><p className="coinValue">$0.05<button className="coin silver" onClick={ () => this.updateBalance(0.05) }></button></p></li>
          <li><p className="coinValue">$0.10<button className="coin silver" onClick={ () => this.updateBalance(0.10) }></button></p></li>
          <li><p className="coinValue">$0.25<button className="coin silver" onClick={() => this.updateBalance(0.25) }></button></p></li>
          <li><p className="coinValue">$1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
        </ul>
      </div>
    );
  }
}

export default InputComponent;
