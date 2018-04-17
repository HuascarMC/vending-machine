import React from 'react';

class DisplayContainer extends React.Component {
 constructor(props) {
  super(props);

}
// Updates the number property in state when input value changes.

 render() {
 // Renders a form to get user input and passes the value of state to props table container.

  return(
  <div className="display">
    <ul>

    <li><p>$0.65<button className="coke" onKeyPress={ this.updateNumber }>COKE</button></p></li>
    <li><p>$1.00<button className="pepsi" onKeyPress={ this.updateNumber }>PEPSI</button></p></li>
    <li><p>$1.50<button className="soda" onKeyPress={ this.updateNumber }>SODA</button></p></li>
    <li><p>$2.00<button className="water" onKeyPress={ this.updateNumber }>WATER</button></p></li>
  </ul>
 </div>
   );
  }
 }

export default DisplayContainer;
