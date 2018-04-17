import React from 'react';

class InputContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   number: 0,
  }
  this.updateNumber = this.updateNumber.bind(this);
}
// Updates the number property in state when input value changes.
updateNumber(evt) {
 if(evt.key === 'Enter') {
   this.setState({
    number: evt.target.value
   })
  }
}

 render() {
 // Renders a form to get user input and passes the value of state to props table container.

  return(
  <div className="controller">
  <button className="INSERT PENNY" onKeyPress={ this.updateNumber }>INSERT PENNY</button>
   <form onSubmit={e => { e.preventDefault(); }} className="get-balance-form">
    <p className="display-input-text">{ this.state.number }</p>
    <button className="push" onKeyPress={ this.updateNumber }>PUSH</button>
   </form>
 </div>
   );
  }
 }

 // 
 // <li><p>$0.65<button className="coke" onKeyPress={ this.updateNumber }>COKE</button></p></li>
 // <li><p>$1.00<button className="pepsi" onKeyPress={ this.updateNumber }>PEPSI</button></p></li>
 // <li><p>$1.50<button className="soda" onKeyPress={ this.updateNumber }>SODA</button></p></li>
 // <li><p>$2.00<button className="water" onKeyPress={ this.updateNumber }>WATER</button></p></li>
export default InputContainer;
