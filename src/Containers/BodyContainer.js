import React from 'react';
import OrderContainer from './OrderContainer'
import MaintenanceContainer from './MaintenanceContainer'

class BodyContainer extends React.Component {


  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer />
        <MaintenanceContainer />
      </div>
    );
  }
}

export default BodyContainer;
