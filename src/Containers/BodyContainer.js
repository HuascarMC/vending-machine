import React from 'react';
import OrderContainer from './OrderContainer'
import MaintenanceContainer from './MaintenanceContainer'
import MachineContainer from './MachineContainer'

class BodyContainer extends React.Component {


  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer />
        <MaintenanceContainer />
        <MachineContainer />
      </div>
    );
  }
}

export default BodyContainer;
