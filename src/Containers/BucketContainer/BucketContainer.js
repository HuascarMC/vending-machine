import React from 'react';

class BucketContainer extends React.Component {

  generateChange() {
    var change = []
    for(var i = 0; i < this.props.change; i++) {
      change.unshift(this.generateCoin(this.props.change[i]))
    }
  }

  generateCoin(coin) {
    return <li><p className="coinValue">{coin}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
  }

 render() {
   var HTMLchange = this.generateChange()
  return(
  <div className="bucket">
    <p>{HTMLchange}</p>
 </div>
   );
  }
 }

export default BucketContainer;
