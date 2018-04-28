import React from 'react';
import OrderContainer from './OrderContainer'
import MaintenanceContainer from './MaintenanceContainer'
import MachineContainer from './MachineContainer'
import ChangeContainer from './ChangeContainer'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      change: 0.00,
      transactionState: ""
    }
    this.updateChange = this.updateChange.bind(this);
    this.updateTransactionState = this.updateTransactionState.bind(this);
  }

  updateChange(amount) {
    this.setState({
      change: amount
    })
  }

  updateTransactionState(state) {
    this.setState({
      transactionState: state
    })
  }

  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer state={ this.state }/>
        <MaintenanceContainer />
        <MachineContainer updateChange={ this.updateChange } updateTransactionState={ this.updateTransactionState }/>
        <ChangeContainer change={ this.state.change }/>
      </div>
    );
  }
}

export default BodyContainer;
