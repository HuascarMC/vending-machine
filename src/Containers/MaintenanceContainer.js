import React from 'react';
import CoinController from '../Components/CoinController'
import ItemController from '../Components/ItemController'


class MaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="maintenance-wrapper">
        <CoinController />
        <ItemController />
      </div>
    );
  }
}

export default MaintenanceContainer;
