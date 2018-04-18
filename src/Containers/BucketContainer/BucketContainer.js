import React from 'react';

class BucketContainer extends React.Component {

  generateChange() {
    var htmlChange = []
    if(this.props.change !== "undefined") {

    for(var i = 0; i < this.props.change.length; i++) {
      htmlChange.unshift(this.generateCoin(this.props.change[i]))
      // console.log(this.props.change[i])
    }
    return htmlChange
    }
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
       return <li><p className="coinValue change">{coin.toString()}      $1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
     case "DOLLAR":
      return <li><p className="coinValue change">{coin.toString()}       $1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
   }
  }

 render() {
  var result = this.generateChange()
   // var result = this.generateChange()
  return(
  <div className="bucket">
    { result }
 </div>
   );
  }
 }

export default BucketContainer;
