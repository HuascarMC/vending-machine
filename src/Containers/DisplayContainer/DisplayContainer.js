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
    <li><button className="coke" onKeyPress={ this.updateNumber }>COKE</button></li>
    <li><button className="pepsi" onKeyPress={ this.updateNumber }>PEPSI</button></li>
    <li><button className="soda" onKeyPress={ this.updateNumber }>SODA</button></li>
    <li><button className="water" onKeyPress={ this.updateNumber }>WATER</button></li>
  </ul>
 </div>
   );
  }
 }

export default DisplayContainer;
