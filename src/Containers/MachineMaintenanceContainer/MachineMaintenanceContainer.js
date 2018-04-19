import React from 'react';
import axios from 'axios';

class MachineMaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {

    return(
      <div className="maintenance">
        <div className="stock ">
          <ul className="stock item-main">
            <li className="stock-item">COKE <p className="quantity">{this.props.state.COKE}</p><button onClick={() => this.props.increaseItemQuantity("coke")} className="plus">+</button><button onClick={()=>this.props.reduceItemQuantity("coke")}className="minus">-</button></li>
            <li className="stock-item">PEPS <p className="quantity">{this.props.state.PEPSI}</p><button onClick={() => this.props.increaseItemQuantity("pepsi")} className="plus">+</button><button onClick={()=>this.props.reduceItemQuantity("pepsi")}className="minus">-</button></li>
            <li className="stock-item">SODA <p className="quantity">{this.props.state.SODA}</p><button onClick={() => this.props.increaseItemQuantity("soda")} className="plus">+</button><button onClick={()=>this.props.reduceItemQuantity("soda")}className="minus">-</button></li>
            <li className="stock-item">WATE <p className="quantity">{this.props.state.WATER}</p><button onClick={() => this.props.increaseItemQuantity("water")} className="plus">+</button><button onClick={()=>this.props.reduceItemQuantity("water")}className="minus">-</button></li>
          </ul>
        </div>
        <div className="stock">
          <ul className="stock coin-main">
            <li className="stock-item">DOLL <p className="quantity">{this.props.state.DOLLAR}</p><button onClick={() => this.props.increaseCoinQuantity("dollar")} className="plus">+</button><button onClick={()=>this.props.reduceCoinQuantity("dollar")}className="minus">-</button></li>
            <li className="stock-item">QUAR <p className="quantity">{this.props.state.QUARTER}</p><button onClick={() => this.props.increaseCoinQuantity("quarter")} className="plus">+</button><button onClick={()=>this.props.reduceCoinQuantity("quarter")}className="minus">-</button></li>
            <li className="stock-item">DIME <p className="quantity">{this.props.state.DIME}</p><button onClick={() => this.props.increaseCoinQuantity("dime")} className="plus">+</button><button onClick={()=>this.props.reduceCoinQuantity("dime")}className="minus">-</button></li>
            <li className="stock-item">NICK <p className="quantity">{this.props.state.NICKEL}</p><button onClick={() => this.props.increaseCoinQuantity("nickel")} className="plus">+</button><button onClick={()=>this.props.reduceCoinQuantity("nickel")}className="minus">-</button></li>
            <li className="stock-item">PENN <p className="quantity">{this.props.state.PENNY}</p><button onClick={() => this.props.increaseCoinQuantity("penny")} className="plus">+</button><button onClick={()=>this.props.reduceCoinQuantity("penny")}className="minus">-</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MachineMaintenanceContainer;
