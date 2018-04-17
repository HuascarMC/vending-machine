import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'
import DisplayContainer from '../DisplayContainer/DisplayContainer.js'
import axios from 'axios';

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "None",
      balance: 0.00
    }

  }

pushOrder(item, balance) {

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
          <InputContainer updateBalance={this.updateBalance.bind(this)}/>
          <DisplayContainer updateItem={this.updateItem.bind(this)} />
      </div>
    </div>
    )
  }
}

export default MachineContainer;
