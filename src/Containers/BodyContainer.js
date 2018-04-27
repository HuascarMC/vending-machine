import React from 'react';
import OrderContainer from './OrderContainer'
import MaintenanceContainer from './MaintenanceContainer'
import MachineContainer from './MachineContainer'
import ChangeContainer from './ChangeContainer'

class BodyContainer extends React.Component {


  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer />
        <MaintenanceContainer />
        <MachineContainer />
        <ChangeContainer />
      </div>
    );
  }
}

export default BodyContainer;
