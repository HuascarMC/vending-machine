import React from 'react';
import CoinsComponent from './CoinsComponent.js'
import BalanceDisplayComponent from './BalanceDisplayComponent.js'

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
    <BalanceDisplayComponent />
    <CoinsComponent updateBalance={this.props.updateBalance}/>
   <form onSubmit={e => { e.preventDefault(); }} className="get-balance-form">
    <p className="display-input-text">{ this.state.number }</p>
    <button className="push" onKeyPress={ this.updateNumber }>PUSH</button>
   </form>
 </div>
   );
  }
 }


export default InputContainer;
