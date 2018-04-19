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
            <li className="stock-item">COKE<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">PEPS<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">SODA<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">WATE<button className="plus">+</button><button className="minus">-</button></li>
          </ul>
        </div>
        <div className="stock">
          <ul className="stock coin-main">
            <li className="stock-item">DOLL<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">QUAR<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">DIME<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">NICK<button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">PENN<button className="plus">+</button><button className="minus">-</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
