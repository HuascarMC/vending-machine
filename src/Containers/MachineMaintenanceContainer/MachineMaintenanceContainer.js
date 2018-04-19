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
        <div className="stock">
          <ul>
            <li className="stock">COKE</li>
            <li className="stock">PEPSI</li>
            <li className="stock">SODA</li>
            <li className="stock">WATER</li>
          </ul>
        </div>
        <div className="stock">
          <ul>
            <li className="stock">DOLLAR</li>
            <li className="stock">QUARTER</li>
            <li className="stock">DIME</li>
            <li className="stock">NICKEL</li>
            <li className="stock">PENNY</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
