import React from 'react';
import TransactionStateComponent from './TransactionStateComponent'
var convertToChange = require('../../Tools/convertToChange');

class BucketContainer extends React.Component {

  componentDidMount()
{
  this.props.resetChange();
}

componentDidUpdate()
{
  this.props.resetChange();
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
    return <li><p className="coinValue change">{coin.toString()}$0.01<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
    case "NICKEL":
    return <li><p className="coinValue change">{coin.toString()}$0.05<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
    case "DIME":
    return <li><p className="coinValue change">{coin.toString()}$0.10<button className="coin silver" onClick={ () => this.updateBalance(0.05) }></button></p></li>
    case "QUARTER":
    return <li><p className="coinValue change">{coin.toString()}$0.25<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
    case "DOLLAR":
    return <li><p className="coinValue change">{coin.toString()}$1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
  }
}

render() {
  var result;
    if ((typeof this.props.state.change) == "number") {
      result = this.generateChange(convertToChange(this.props.state.change))
    } else {
      result = this.generateChange(this.props.state.change)
    }
  return(
    <div>
      <p className="title-total-change">Change Total: </p>
      <div className="changeTotal">
        <p className="balance-text">${ this.props.state.changeTotal }</p>
      </div>
      <div className="bucket">
        { result }
      </div>
      <TransactionStateComponent state={this.props.state}/>
    </div>
   );
  }
 }

export default BucketContainer;
