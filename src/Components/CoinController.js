import React from 'react';
import axios from 'axios'

class CoinController extends React.Component {
  render() {

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

    return(
      <div className="controller-wrapper">
        <ul>
          <li>COKE<button onClick={() => this.increaseCoinQuantity()} className="plus">+</button><button onClick={() => this.reduceCoinQuantity()} className="minus">-</button></li>
          <li>PEPSI<button onClick={() => this.increaseCoinQuantity()} className="plus">+</button><button onClick={() => this.reduceCoinQuantity()} className="minus">-</button></li>
          <li>SODA<button onClick={() => this.increaseCoinQuantity()} className="plus">+</button><button onClick={() => this.reduceCoinQuantity()} className="minus">-</button></li>
          <li>WATER<button onClick={() => this.increaseCoinQuantity()} className="plus">+</button><button onClick={() => this.reduceCoinQuantity()} className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default CoinController;
