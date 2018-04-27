import React from 'react';

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

    return(
      <div className="controller-wrapper">
        <ul>
          <li>COKE<button onClick={() => this.increaseCoinQuantity()} className="plus">+</button><button className="minus">-</button></li>
          <li>PEPSI<button className="plus">+</button><button className="minus">-</button></li>
          <li>SODA<button className="plus">+</button><button className="minus">-</button></li>
          <li>WATER<button className="plus">+</button><button className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default CoinController;
