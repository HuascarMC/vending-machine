import React from 'react';
import axios from 'axios'

class CoinController extends React.Component {

  increaseCoinQuantity(coin) {
    axios.put(`https://vending-machine-server.herokuapp.com/machine/addcoin/${coin}`, { crossdomain: true})
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  reduceCoinQuantity(coin) {
    axios.put(`https://vending-machine-server.herokuapp.com/machine/removecoin/${coin}`, { crossdomain: true})
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div className="controller-wrapper">
        <ul>
          <li>DOLL<button onClick={() => this.increaseCoinQuantity("dollar")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("dollar")} className="minus">-</button></li>
          <li>QUAR<button onClick={() => this.increaseCoinQuantity("quarter")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("quarter")} className="minus">-</button></li>
          <li>DIME<button onClick={() => this.increaseCoinQuantity("dime")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("dime")} className="minus">-</button></li>
          <li>NICK<button onClick={() => this.increaseCoinQuantity("nickel")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("nickel")} className="minus">-</button></li>
          <li>PENN<button onClick={() => this.increaseCoinQuantity("penny")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("penny")} className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default CoinController;
