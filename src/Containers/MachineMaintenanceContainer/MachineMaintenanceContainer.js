import React from 'react';
import axios from 'axios';

class MachineMaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      COKE: 0,
      PEPSI: 0,
      SODA: 0,
      WATER: 0,
      DOLLAR: 0,
      QUARTER: 0,
      DIME: 0,
      NICKEL: 0,
      PENNY: 0
    }
    this.getItems = this.getItems.bind(this);
    this.getCoins = this.getCoins.bind(this);
    this.setMaintenanceInfo = this.setMaintenanceInfo.bind(this);
    this.increaseCoinQuantity = this.increaseCoinQuantity.bind(this);
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
    this.reduceCoinQuantity = this.reduceCoinQuantity.bind(this);
    this.reduceItemQuantity = this.reduceItemQuantity.bind(this);
  }

componentDidMount() {
 this.setMaintenanceInfo();
}

setMaintenanceInfo = () => {
  this.getItems();
  this.getCoins();
}

getItems = () => {
    axios.get('http://localhost:4567/machine/items', { crossdomain: true })
   .then((response) => {
     this.setItemsQuantity(response.data)
   })
   .catch(function (error) {
     console.log(error);
   })
}

getCoins = () => {
  axios.get('http://localhost:4567/machine/coins', { crossdomain: true})
  .then((response) => {
    this.setCoinsQuantity(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
}

setItemsQuantity(data) {
  this.setState({
    COKE: data[0].quantity,
    PEPSI: data[1].quantity,
    SODA: data[2].quantity,
    WATER: data[3].quantity
  })
}

setCoinsQuantity(data) {
  this.setState({
    DOLLAR: data[0].quantity,
    QUARTER: data[1].quantity,
    DIME: data[2].quantity,
    NICKEL: data[3].quantity,
    PENNY: data[4].quantity
  })
}

increaseItemQuantity(item) {
  axios.put(`http://localhost:4567/machine/additem/${item}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

increaseCoinQuantity(coin) {
  axios.put(`http://localhost:4567/machine/addcoin/${coin}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

reduceItemQuantity(item) {
  axios.put(`http://localhost:4567/machine/removeitem/${item}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

reduceCoinQuantity(coin) {
  axios.put(`http://localhost:4567/machine/removecoin/${coin}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}



  render() {

    return(
      <div className="maintenance">
        <div className="stock ">
          <ul className="stock item-main">
            <li className="stock-item">COKE <p className="quantity">{this.state.COKE}</p><button onClick={() => this.increaseItemQuantity("coke")} className="plus">+</button><button onClick={()=>this.reduceItemQuantity("coke")}className="minus">-</button></li>
            <li className="stock-item">PEPS <p className="quantity">{this.state.PEPSI}</p><button onClick={() => this.increaseItemQuantity("pepsi")} className="plus">+</button><button onClick={()=>this.reduceItemQuantity("pepsi")}className="minus">-</button></li>
            <li className="stock-item">SODA <p className="quantity">{this.state.SODA}</p><button onClick={() => this.increaseItemQuantity("soda")} className="plus">+</button><button onClick={()=>this.reduceItemQuantity("soda")}className="minus">-</button></li>
            <li className="stock-item">WATE <p className="quantity">{this.state.WATER}</p><button onClick={() => this.increaseItemQuantity("water")} className="plus">+</button><button onClick={()=>this.reduceItemQuantity("water")}className="minus">-</button></li>
          </ul>
        </div>
        <div className="stock">
          <ul className="stock coin-main">
            <li className="stock-item">DOLL <p className="quantity">{this.state.DOLLAR}</p><button onClick={() => this.increaseCoinQuantity("dollar")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("dollar")}className="minus">-</button></li>
            <li className="stock-item">QUAR <p className="quantity">{this.state.QUARTER}</p><button onClick={() => this.increaseCoinQuantity("quarter")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("quarter")}className="minus">-</button></li>
            <li className="stock-item">DIME <p className="quantity">{this.state.DIME}</p><button onClick={() => this.increaseCoinQuantity("dime")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("dime")}className="minus">-</button></li>
            <li className="stock-item">NICK <p className="quantity">{this.state.NICKEL}</p><button onClick={() => this.increaseCoinQuantity("nickel")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("nickel")}className="minus">-</button></li>
            <li className="stock-item">PENN <p className="quantity">{this.state.PENNY}</p><button onClick={() => this.increaseCoinQuantity("penny")} className="plus">+</button><button onClick={()=>this.reduceCoinQuantity("penny")}className="minus">-</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
