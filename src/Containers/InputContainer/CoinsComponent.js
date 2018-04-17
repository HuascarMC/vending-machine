import React from 'react';

class CoinsComponent extends React.Component {
 constructor(props) {
  super(props);
}

 render() {
 // Renders a form to get user input and passes the value of state to props table container.

  return(
  <div className="coins-box">
    <li><p className="coinValue">$0.01<button className="coin bronze" onKeyPress={ this.updateNumber }></button></p></li>
    <li><p className="coinValue">$0.05<button className="coin silver" onKeyPress={ this.updateNumber }></button></p></li>
    <li><p className="coinValue">$0.10<button className="coin silver" onKeyPress={ this.updateNumber }></button></p></li>
    <li><p className="coinValue">$0.25<button className="coin silver" onKeyPress={ this.updateNumber }></button></p></li>
    <li><p className="coinValue">$1.00<button className="coin gold" onKeyPress={ this.updateNumber }></button></p></li>
 </div>
   );
  }
 }


export default CoinsComponent;
