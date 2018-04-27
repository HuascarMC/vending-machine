import React from 'react';
import axios from 'axios';

class CoinController extends React.Component {
  render() {
    return(
      <div className="controller-wrapper">
        <ul>
          <li>COKE<button className="plus">+</button><button className="minus">-</button></li>
          <li>PEPSI<button className="plus">+</button><button className="minus">-</button></li>
          <li>SODA<button className="plus">+</button><button className="minus">-</button></li>
          <li>WATER<button className="plus">+</button><button className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default CoinController;
