import React from 'react';

class DisplayComponent extends React.Component {
  render() {
    return(
      <div className="display machine-display">
        <p className="display-text">{ this.props.value }</p>
      </div>
    );
  }
}


export default DisplayComponent;
