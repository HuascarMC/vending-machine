import React from 'react';
import TableContainer from '../TableContainer/TableContainer.js'

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
   <form onSubmit={e => { e.preventDefault(); }} className="get-number-form">
    <p className="display-input-text">Please enter your balance { this.state.number }</p>
    <input onSubmit={e => { e.preventDefault(); }} className="get-number-input" onKeyPress={ this.updateNumber }/>
    <TableContainer number={ this.state.number }/>
   </form>
   );
  }
 }

export default InputContainer;
