import React from 'react';
import axios from 'axios';

class ItemController extends React.Component {
  render() {
    return(
      <div className="stock">
        <ul className="stock item-main">
          <li className="stock-item">COKE <p className="quantity">{this.props.props.state.COKE}</p><button onClick={() => this.props.props.increaseItemQuantity("coke")} className="plus">+</button><button onClick={()=>this.props.props.reduceItemQuantity("coke")}className="minus">-</button></li>
          <li className="stock-item">PEPS <p className="quantity">{this.props.props.state.PEPSI}</p><button onClick={() => this.props.props.increaseItemQuantity("pepsi")} className="plus">+</button><button onClick={()=>this.props.props.reduceItemQuantity("pepsi")}className="minus">-</button></li>
          <li className="stock-item">SODA <p className="quantity">{this.props.props.state.SODA}</p><button onClick={() => this.props.props.increaseItemQuantity("soda")} className="plus">+</button><button onClick={()=>this.props.props.reduceItemQuantity("soda")}className="minus">-</button></li>
          <li className="stock-item">WATE <p className="quantity">{this.props.props.state.WATER}</p><button onClick={() => this.props.props.increaseItemQuantity("water")} className="plus">+</button><button onClick={()=>this.props.props.reduceItemQuantity("water")}className="minus">-</button></li>
        </ul>
      </div>
    );
  }
}

export default ItemController;
