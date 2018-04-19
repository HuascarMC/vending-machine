import React from 'react';

class MachineMaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      COKE: 0,
      PEPSI: 0,
      SODA: 0,
      WATER: 0,
      DOLLAR: 0,
      QUARTER: 0,
      DIME: 0,
      NICKEL: 0,
      PENNY: 0
    }
  }



  render() {
    return(
      <div className="maintenance">
        <div className="stock ">
          <ul className="stock item-main">
            <li className="stock-item">COKE <p className="quantity">{this.state.COKE}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">PEPS <p className="quantity">{this.state.PEPSI}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">SODA <p className="quantity">{this.state.SODA}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">WATE <p className="quantity">{this.state.WATER}</p><button className="plus">+</button><button className="minus">-</button></li>
          </ul>
        </div>
        <div className="stock">
          <ul className="stock coin-main">
            <li className="stock-item">DOLL <p className="quantity">{this.state.DOLLAR}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">QUAR <p className="quantity">{this.state.QUARTER}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">DIME <p className="quantity">{this.state.DIME}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">NICK <p className="quantity">{this.state.NICKEL}</p><button className="plus">+</button><button className="minus">-</button></li>
            <li className="stock-item">PENN <p className="quantity">{this.state.PENNY}</p><button className="plus">+</button><button className="minus">-</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
