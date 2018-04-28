import React from 'react';
import DisplayComponent from '../Components/DisplayComponent'
import InputComponent from '../Components/InputComponent'
import OrderButtonComponent from '../Components/OrderButtonComponent'
import BalanceDisplayComponent from '../Components/BalanceDisplayComponent'

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: 'none',
      balance: 0.00
    }
  }

  updateItem(choice) {
    this.setState({
      item: choice
    })
  }

  updateBalance(amount) {
    this.setState({
      balance: this.state.balance + amount
    })
  }

  render() {
    return(
      <div className="machine-wrapper">
        <div className="machine">
          <BalanceDisplayComponent value={ this.state.item }/>
          <BalanceDisplayComponent value={'$' + this.state.balance.toFixed(2) }/>
          <DisplayComponent updateItem={ this.updateItem.bind(this) }/>
          <InputComponent updateBalance={ this.updateBalance.bind(this) } state={ this.state }/>
          <OrderButtonComponent/>
        </div>
      </div>
    );
  }
}

export default MachineContainer;
