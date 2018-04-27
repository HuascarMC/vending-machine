import React from 'react';
import DisplayComponent from '../Components/DisplayComponent'
import InputComponent from '../Components/InputComponent'
import OrderButtonComponent from '../Components/OrderButtonComponent'

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: 0.00,
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
          <DisplayComponent updateItem={ this.updateItem.bind(this) }/>
          <InputComponent updateBalance={ this.updateBalance.bind(this) } balance={ this.state.balance }/>
          <OrderButtonComponent/>
        </div>
      </div>
    );
  }
}

export default MachineContainer;
