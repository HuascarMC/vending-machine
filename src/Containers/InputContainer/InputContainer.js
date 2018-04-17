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
   <form onSubmit={e => { e.preventDefault(); }} className="get-balance-form">
    <p className="display-input-text">Please enter your balance { this.state.number }</p>
    <input onSubmit={e => { e.preventDefault(); }} className="get-number-input" onKeyPress={ this.updateNumber }/>
   </form>
   );
  }
 }

export default InputContainer;
