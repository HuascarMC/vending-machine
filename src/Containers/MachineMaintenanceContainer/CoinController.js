import React from 'react';
import axios from 'axios';

class CoinController extends React.Component {
  render() {
    return(
        <div className="stock">
          <ul className="stock coin-main">
            <li className="stock-item">DOLL <p className="quantity">{this.props.props.state.DOLLAR}</p><button onClick={() => this.props.props.increaseCoinQuantity("dollar")} className="plus">+</button><button onClick={()=>this.props.props.reduceCoinQuantity("dollar")}className="minus">-</button></li>
            <li className="stock-item">QUAR <p className="quantity">{this.props.props.state.QUARTER}</p><button onClick={() => this.props.props.increaseCoinQuantity("quarter")} className="plus">+</button><button onClick={()=>this.props.props.reduceCoinQuantity("quarter")}className="minus">-</button></li>
            <li className="stock-item">DIME <p className="quantity">{this.props.props.state.DIME}</p><button onClick={() => this.props.props.increaseCoinQuantity("dime")} className="plus">+</button><button onClick={()=>this.props.props.reduceCoinQuantity("dime")}className="minus">-</button></li>
            <li className="stock-item">NICK <p className="quantity">{this.props.props.state.NICKEL}</p><button onClick={() => this.props.props.increaseCoinQuantity("nickel")} className="plus">+</button><button onClick={()=>this.props.props.reduceCoinQuantity("nickel")}className="minus">-</button></li>
            <li className="stock-item">PENN <p className="quantity">{this.props.props.state.PENNY}</p><button onClick={() => this.props.props.increaseCoinQuantity("penny")} className="plus">+</button><button onClick={()=>this.props.props.reduceCoinQuantity("penny")}className="minus">-</button></li>
          </ul>
        </div>

    );
  }
}

export default CoinController;
