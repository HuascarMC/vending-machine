import React from 'react';
var convertToChange = require('../../Tools/convertToChange');

class BucketContainer extends React.Component {

  componentDidMount()
{
  this.props.resetChange();
}

componentDidUpdate()
{
  this.props.resetChange();
  console.log("hi")
}


  generateChange(change) {
    var htmlChange = []
    for(var i = 0; i < change.length; i++) {
      htmlChange.unshift(this.generateCoin(change[i]))
  }
  console.log(change);
  return htmlChange
}

generateCoin(coin) {
  switch(coin) {
    case "PENNY":
    return <li><p className="coinValue change">{coin.toString()}      $0.01<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
    case "NICKEL":
    return <li><p className="coinValue change">{coin.toString()}      $0.01<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
    case "DIME":
    return <li><p className="coinValue change">{coin.toString()}      $0.05<button className="coin silver" onClick={ () => this.updateBalance(0.05) }></button></p></li>
    case "QUARTER":
    return <li><p className="coinValue change">{coin.toString()}      $0.25<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
    case "DOLLAR":
    return <li><p className="coinValue change">{coin.toString()}       $1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
  }
}

render() {
  var result;
    if ((typeof this.props.change) == "number") {
      result = this.generateChange(convertToChange(this.props.change))
    } else {
      result = this.generateChange(this.props.change)
    }
    console.log(typeof this.props.change);
  // var result = this.generateChange()
  return(
    <div>
      <p className="title-total-change">Change Total: </p>
      <div className="changeTotal">
        <p className="balance-text">${ this.props.changeTotal }</p>
      </div>
      <div className="bucket">
        { result }
      </div>
      <div className="transaction-state-container">
        <p className="title-transaction-state">Transaction State: </p>
        <div className="transaction-state">
          <p className="state-title">In Stock: {JSON.stringify(this.props.state.stockInventoryState) } </p>
          <p className="state-title">Enough change: {JSON.stringify(this.props.state.coinInventoryState) } </p>
          <p className="state-title">Enough balance: {JSON.stringify(this.props.state.balanceState) } </p>
        </div>
      </div>
    </div>
   );
  }
 }

export default BucketContainer;
