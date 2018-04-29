import React from 'react';
import axios from 'axios'

class CoinController extends React.Component {

  increaseCoinQuantity(coin) {
    axios.put(`https://localhost:4567/machine/addcoin/${coin}`, { crossdomain: true})
    .then((response) => {
      this.props.getCoins();
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  reduceCoinQuantity(coin) {
    axios.put(`https://localhost:4567/machine/removecoin/${coin}`, { crossdomain: true})
    .then((response) => {
      this.props.getCoins();
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div className="controller-wrapper">
        <ul>
          <li>DOLL { this.props.coins.dollar }<button onClick={() => this.increaseCoinQuantity("dollar")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("dollar")} className="minus">-</button></li>
          <li>QUAR { this.props.coins.quarter }<button onClick={() => this.increaseCoinQuantity("quarter")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("quarter")} className="minus">-</button></li>
          <li>DIME { this.props.coins.dime }<button onClick={() => this.increaseCoinQuantity("dime")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("dime")} className="minus">-</button></li>
          <li>NICK { this.props.coins.nickel }<button onClick={() => this.increaseCoinQuantity("nickel")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("nickel")} className="minus">-</button></li>
          <li>PENN { this.props.coins.penny }<button onClick={() => this.increaseCoinQuantity("penny")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("penny")} className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default CoinController;
