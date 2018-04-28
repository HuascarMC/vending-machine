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
    this.setResponse = this.setResponse.bind(this);
  }

  setResponse(response) {
    if(response !== undefined) {
      this.setState({
        change: response.data.fourth,
        transactionState: response.data.third
      })
    }
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
        <MachineContainer updateChange={ this.updateChange } updateTransactionState={ this.updateTransactionState } setResponse={ this.setResponse }/>
        <ChangeContainer change={ this.state.change }/>
      </div>
    );
  }
}

export default BodyContainer;
