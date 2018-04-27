import React from 'react';
import DisplayComponent from '../Components/DisplayComponent'

class MachineContainer extends React.Component {


  render() {
    return(
      <div className="machine-wrapper">
        <div className="machine">
          <DisplayComponent />
        </div>
      </div>
    );
  }
}

export default MachineContainer;
