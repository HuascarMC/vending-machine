import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'
import DisplayContainer from '../DisplayContainer/DisplayContainer.js'

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "a",
    }


  }

  setSelection(selection) {
    this.state.selection = selection;
  }


  render() {
    return(
      <div className="machine">
          <InputContainer />
          <div className="choice">{this.state.selection}</div>
          <DisplayContainer setSelection={this.setSelection.bind(this)}/>
      </div>
    )
  }
}

export default MachineContainer;
