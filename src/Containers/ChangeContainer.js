import React from 'react';
import ChangeComponent from '../Components/ChangeComponent'
import ChangeTotalDisplay from '../Components/ChangeTotalDisplay'

class ChangeContainer extends React.Component {

  render() {
    return(
      <div className="change-wrapper">
        <ChangeTotalDisplay amount={ this.props.change }/>
        <ChangeComponent amount={ this.props.change }/>
      </div>
    );
  }
}

export default ChangeContainer;
