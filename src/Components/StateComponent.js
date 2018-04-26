import React from 'react';

class StateComponent extends React.Component {
  render() {
    return(
      <div className="state-wrapper">
        <p className="title">state</p>
          <p className="state-title">In Stock:</p>
          <p className="state-title">Enough change:</p>
          <p className="state-title">Enough balance:</p>
      </div>
    );
  }
}

export default StateComponent;
