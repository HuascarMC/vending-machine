import React from 'react';

class BucketContainer extends React.Component {

  generateChange() {
    var htmlChange = []
    for(var i = 0; i < this.props.change.length; i++) {
      htmlChange.unshift(this.generateCoin(this.props.change[i]))
      // console.log(this.props.change[i])
    }
    return htmlChange
  }

  generateCoin(coin) {
    return <li><p className="coinValue">{coin}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
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
