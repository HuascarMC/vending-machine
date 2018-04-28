import React from 'react';
import StockDisplayComponent from '../Components/StockDisplayComponent'
import InputComponent from '../Components/InputComponent'
import OrderButtonComponent from '../Components/OrderButtonComponent'
import DisplayComponent from '../Components/DisplayComponent'

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
      balance: amount
    })
  }

  render() {
    return(
      <div className="machine-wrapper">
        <div className="machine">
          <DisplayComponent value={ this.state.item }/>
          <DisplayComponent value={'$' + this.state.balance.toFixed(2) }/>
          <StockDisplayComponent updateItem={ this.updateItem.bind(this) }/>
          <InputComponent updateBalance={ this.updateBalance.bind(this) } state={ this.state }/>
          <OrderButtonComponent updateBalance={ this.updateBalance.bind(this) } updateChange={ this.props.updateChange } balance={ this.state.balance }/>
        </div>
      </div>
    );
  }
}

export default MachineContainer;
