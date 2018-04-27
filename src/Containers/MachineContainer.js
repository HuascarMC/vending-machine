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

  updateBalance(amount) {
    this.setState({
      balance: this.state.balance + amount
    })
  }

  render() {
    return(
      <div className="machine-wrapper">
        <div className="machine">
          <DisplayComponent />
          <InputComponent />
          <OrderButtonComponent />
        </div>
      </div>
    );
  }
}

export default MachineContainer;
