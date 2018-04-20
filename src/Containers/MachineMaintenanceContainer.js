import React from 'react';
import ItemController from '../Components/ItemController'
import CoinController from '../Components/CoinController'
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
