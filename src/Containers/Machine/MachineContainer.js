import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div className="machine">
          <InputContainer />
      </div>
    )
  }
}

export default MachineContainer;
