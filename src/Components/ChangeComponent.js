import React from 'react';
import ConvertToChange from './Tools/ConvertToChange'

class ChangeComponent extends React.Component {

  generateChange(change) {
    var changeInCoins = []
    for(var i = 0; i < change.length; i++) {
      changeInCoins.unshift(this.generateCoin(change[i]))
    }
    return changeInCoins;
  }

  generateCoin(coin) {
    switch(coin) {
      case "PENNY":
      return <p className="coinValue change">{coin.toString()}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p>
      case "NICKEL":
      return <p className="coinValue change">{coin.toString()}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p>
      case "DIME":
      return <p className="coinValue change">{coin.toString()}<button className="coin silver" onClick={ () => this.updateBalance(0.05) }></button></p>
      case "QUARTER":
      return <p className="coinValue change">{coin.toString()}<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p>
      case "DOLLAR":
      return <p className="coinValue change">{coin.toString()}<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p>
    }
  }

  render() {
    var change;
    if ((typeof this.props.amount) == "string") {
      change = this.generateChange(ConvertToChange(this.props.amount))
    } else {
      change = this.generateChange(this.props.amount)
    }
    return(
      <div className="change-box">
        { change }
      </div>
    );
  }
}

export default ChangeComponent;
