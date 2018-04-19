import React from 'react';

class MachineMaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: ""
    }
  }



  render() {
    return(
      <div className="maintenance">
        <div className="stock ">
          <ul className="stock item-main">
            <li className="stock-item">COKE</li>
            <li className="stock-item">PEPSI</li>
            <li className="stock-item">SODA</li>
            <li className="stock-item">WATER</li>
          </ul>
        </div>
        <div className="stock">
          <ul className="stock coin-main">
            <li className="stock-item">DOLLAR</li>
            <li className="stock-item">QUARTER</li>
            <li className="stock-item">DIME</li>
            <li className="stock-item">NICKEL</li>
            <li className="stock-item">PENNY</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
