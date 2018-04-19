import React from 'react';
import ItemController from './ItemController'
import CoinController from './CoinController'
import axios from 'axios';

class MachineMaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="maintenance">
        <ItemController props={this.props}/>
        <CoinController props={this.props}/>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
