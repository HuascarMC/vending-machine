import React from 'react';
import InputContainer from './InputContainer.js'
import DisplayComponent from '../Components/DisplayComponent.js'
import MachineMaintenanceContainer from './MachineMaintenanceContainer.js'
import axios from 'axios';

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "none",
      balance: 0.00,
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
    this.pushOrder = this.pushOrder.bind(this);
    this.tryOrder = this.tryOrder.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getCoins = this.getCoins.bind(this);
    this.increaseCoinQuantity = this.increaseCoinQuantity.bind(this);
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
    this.reduceCoinQuantity = this.reduceCoinQuantity.bind(this);
    this.reduceItemQuantity = this.reduceItemQuantity.bind(this);
}
componentDidMount() {
  this.getItems();
  this.getCoins();
}
getItems = () => {
    axios.get('http://localhost:4567/machine/items', { crossdomain: true })
   .then((response) => {
     console.log(response);
     this.setItemsQuantity(response.data)
   })
   .catch(function (error) {
     console.log(error);
   })
}

getCoins = () => {
  axios.get('http://localhost:4567/machine/coins', { crossdomain: true})
  .then((response) => {
    console.log(response);
    this.setCoinsQuantity(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
}

setItemsQuantity(data) {
  this.setState({
    COKE: data[3].quantity,
    PEPSI: data[2].quantity,
    SODA: data[1].quantity,
    WATER: data[0].quantity
  })
}

setCoinsQuantity(data) {
  this.setState({
    DOLLAR: data[0].quantity,
    QUARTER: data[1].quantity,
    DIME: data[2].quantity,
    NICKEL: data[4].quantity,
    PENNY: data[3].quantity
  })
}

increaseItemQuantity(item) {
  axios.put(`http://localhost:4567/machine/additem/${item}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
    this.getItems();
    this.getCoins();
  })
  .catch(function (error) {
    console.log(error);
  })
}

increaseCoinQuantity(coin) {
  axios.put(`http://localhost:4567/machine/addcoin/${coin}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
    this.getItems();
    this.getCoins();
  })
  .catch(function (error) {
    console.log(error);
  })
}

reduceItemQuantity(item) {
  axios.put(`http://localhost:4567/machine/removeitem/${item}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
    this.getItems();
    this.getCoins();
  })
  .catch(function (error) {
    console.log(error);
  })
}

reduceCoinQuantity(coin) {
  axios.put(`http://localhost:4567/machine/removecoin/${coin}`, { crossdomain: true})
  .then((response) => {
    console.log(response);
    this.getItems();
    this.getCoins();
  })
  .catch(function (error) {
    console.log(error);
  })
}

pushReturn() {
  this.props.setChange(this.state.balance)
  this.resetBalance()
}

pushOrder() {
  this.tryOrder();
  this.getItems();
  this.getCoins();
}

tryOrder() {
  axios.post('http://localhost:4567/order', JSON.stringify({item: this.state.item, balance: this.state.balance}))
 .then((response) => {
   // console.log(response);
   this.props.setResponse(response)
   this.resetBalance()
 })
 .catch(function (error) {
   console.log(error);
 })
}

resetBalance() {
  this.setState({
    balance: 0.00
  })
}

updateItem(item) {
    this.setState({
        item: item,
    })
}

updateBalance(balance) {
  this.setState({
    balance: this.state.balance + balance
  })
}


  render() {
    return(
      <div>
        <MachineMaintenanceContainer state={this.state} increaseCoinQuantity={this.increaseCoinQuantity} increaseItemQuantity={this.increaseItemQuantity} reduceCoinQuantity={this.reduceCoinQuantity} reduceItemQuantity={this.reduceItemQuantity} getItems={this.getItems} getCoins={this.getCoins}/>
        <p className="title">Your choice</p>
      <div className="choice" >{this.state.item}</div>
      <p className="title">Your balance:</p>
      <div className="choice" >{this.state.balance.toFixed(2)}</div>
      <div className="machine">
          <InputContainer updateBalance={this.updateBalance.bind(this)} pushReturn={this.pushReturn.bind(this)} pushOrder={this.pushOrder.bind(this)} balance={this.state.balance}/>
          <DisplayComponent updateItem={this.updateItem.bind(this)} />
      </div>
    </div>
    )
  }
}

export default MachineContainer;
