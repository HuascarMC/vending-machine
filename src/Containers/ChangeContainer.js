import React from 'react';
import ChangeComponent from '../Components/ChangeComponent'
import ChangeTotalDisplay from '../Components/ChangeTotalDisplay'

class ChangeContainer extends React.Component {

  render() {
    return(
      <div className="change-wrapper">
        <ChangeTotalDisplay />
        <ChangeComponent />
      </div>
    );
  }
}

export default ChangeContainer;
