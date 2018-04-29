import React from 'react';

class ChangeTotalDisplay extends React.Component {
  render() {
    return(
      <div className="display change-display">
        <p className="display-text">${ this.props.amount }</p>
      </div>
    );
  }
}

export default ChangeTotalDisplay;
