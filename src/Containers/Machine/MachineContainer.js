import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'
import DisplayContainer from '../DisplayContainer/DisplayContainer.js'

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);



  }


  render() {
    return(
      <div className="machine">
          <InputContainer />
          <DisplayContainer />
      </div>
    )
  }
}

export default MachineContainer;
