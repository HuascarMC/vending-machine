import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'
import DisplayContainer from '../DisplayContainer/DisplayContainer.js'
import axios from 'axios';

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "none",
      balance: 0.00
    }
    this.setResponseObject = this.setResponseObject.bind(this)
}

setResponseObject(data) {
  this.setState({
    response: data
  })
}

pushOrder() {
   let response = axios.post('http://localhost:4567/order', JSON.stringify({item: this.state.item, balance: this.state.balance}))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setResponseObject(response);
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
        <p className="title">Your choice</p>
      <div className="choice" >{this.state.item}</div>
      <p className="title">Your balance:</p>
      <div className="choice" >{this.state.balance.toFixed(2)}</div>
      <div className="machine">
          <InputContainer updateBalance={this.updateBalance.bind(this)} pushOrder={this.pushOrder.bind(this)}/>
          <DisplayContainer updateItem={this.updateItem.bind(this)} />
      </div>
    </div>
    )
  }
}

export default MachineContainer;
