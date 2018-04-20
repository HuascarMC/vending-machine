import React from 'react';

class ButtonsComponent extends React.Component {
  render() {
    return(
      <div>
        <button className="return" onClick={ this.props.props.pushReturn }>RETURN</button>
        <button className="push" onClick={ this.props.props.pushOrder }>PUSH</button>
      </div>
    );
  }
}


export default ButtonsComponent;
