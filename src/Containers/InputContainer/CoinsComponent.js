import React from 'react';

class CoinsComponent extends React.Component {
 constructor(props) {
  super(props);
}

 render() {
 // Renders a form to get user input and passes the value of state to props table container.

  return(
  <div className="controller">
    <li><p>$0.01<button className="coin" onKeyPress={ this.updateNumber }>PENNY</button></p></li>
    <li><p>$0.05<button className="coin" onKeyPress={ this.updateNumber }>NICKEL</button></p></li>
    <li><p>$0.10<button className="coin" onKeyPress={ this.updateNumber }>DIME</button></p></li>
    <li><p>$0.25<button className="coin" onKeyPress={ this.updateNumber }>QUARTER</button></p></li>
    <li><p>$1.00<button className="coin" onKeyPress={ this.updateNumber }>DOLLAR</button></p></li>
 </div>
   );
  }
 }


export default CoinsComponent;
