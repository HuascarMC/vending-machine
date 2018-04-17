import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'
import DisplayContainer from '../DisplayContainer/DisplayContainer.js'

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "CLICK ON CHOICE",
      balance: ""
    }

  }

updateItem(item) {
    this.setState({
        item: item,
    })
}


  render() {
    return(
      <div>
      <div className="choice" >{this.state.item}</div>
      <div className="machine">
          <InputContainer />
          <DisplayContainer updateItem={this.updateItem.bind(this)} />
      </div>
    </div>
    )
  }
}

export default MachineContainer;
