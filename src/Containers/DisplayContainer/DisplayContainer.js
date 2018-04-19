import React from 'react';

class DisplayContainer extends React.Component {
  render() {
    return(
      <div className="display">
        <ul>
          <li><p className="price">$0.65<button className="coke" onClick={() => this.props.updateItem("coke") } >COKE</button></p></li>
          <li><p className="price">$1.00<button className="pepsi" onClick={() => this.props.updateItem("pepsi") }>PEPSI</button></p></li>
          <li><p className="price">$1.50<button className="soda" onClick={() => this.props.updateItem("soda") }>SODA</button></p></li>
          <li><p className="price">$2.00<button className="water" onClick={() =>this.props.updateItem("water") }>WATER</button></p></li>
        </ul>
      </div>
    );
  }
}

export default DisplayContainer;
