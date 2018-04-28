import React from 'react';
import OrderContainer from './OrderContainer'
import MaintenanceContainer from './MaintenanceContainer'
import MachineContainer from './MachineContainer'
import ChangeContainer from './ChangeContainer'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      change: 0.00
    }
    this.updateChange = this.updateChange.bind(this);
  }

  updateChange(amount) {
    this.setState({
      change: amount
    })
  }

  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer />
        <MaintenanceContainer />
        <MachineContainer updateChange={ this.updateChange }/>
        <ChangeContainer change={ this.state.change }/>
      </div>
    );
  }
}

export default BodyContainer;
