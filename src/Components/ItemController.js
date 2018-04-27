import React from 'react';
import axios from 'axios';

class ItemController extends React.Component {


  increaseItemQuantity(item) {
    axios.put(`https://vending-machine-server.herokuapp.com/machine/removeitem/${item}`, { crossdomain: true})
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  reduceItemQuantity(item) {
    axios.put(`https://vending-machine-server.herokuapp.com/machine/removeitem/${item}`, { crossdomain: true})
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
          <li>COKE<button onClick={()=> this.increaseItemQuantity("coke") } className="plus">+</button><button onClick={ ()=>this.reduceItemQuantity("coke") } className="minus">-</button></li>
          <li>PEPSI<button onClick={()=> this.increaseItemQuantity("pepsi") } className="plus">+</button><button onClick={ ()=>this.reduceItemQuantity("pepsi") } className="minus">-</button></li>
          <li>SODA<button onClick={()=> this.increaseItemQuantity("soda") } className="plus">+</button><button onClick={ ()=>this.reduceItemQuantity("soda") } className="minus">-</button></li>
          <li>WATER<button onClick={()=> this.increaseItemQuantity("water") } className="plus">+</button><button onClick={ ()=>this.reduceItemQuantity("water") } className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default ItemController;
