import React from 'react';

class ChangeComponent extends React.Component {
  render() {
    return(
      <div>
        <p className="title-total-change">change </p>
        <div className="changeTotal">
          <p className="balance-text">${ this.props.state.changeTotal }</p>
        </div>
        <div className="bucket">{ this.props.change }</div>
      </div>

      );
    }
  }

  export default ChangeComponent;
