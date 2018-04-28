import React from 'react';

class InputComponent extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <div className="input-wrapper">
        <ul className="input-box">
          <li><p className="coin-value">$0.01<button onClick={ ()=>this.props.updateBalance(this.props.state.balance + 0.01) } className="coin bronze"></button></p></li>
          <li><p className="coin-value">$0.05<button onClick={ ()=>this.props.updateBalance(this.props.state.balance + 0.05) } className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.10<button onClick={ ()=>this.props.updateBalance(this.props.state.balance + 0.1) } className="coin silver"></button></p></li>
          <li><p className="coin-value">$0.25<button onClick={ ()=>this.props.updateBalance(this.props.state.balance + 0.25) } className="coin silver"></button></p></li>
          <li><p className="coin-value">$1.00<button onClick={ ()=>this.props.updateBalance(this.props.state.balance + 1.00) } className="coin gold"></button></p></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default InputComponent;
