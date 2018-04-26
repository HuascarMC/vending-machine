import React from 'react';

class ItemComponent extends React.Component {
  render() {
    return(
      <div>
        <p className="img-title">bucket</p>
        <div className="img-container">
          <img src={this.state.imgsrc}/>
        </div>
      </div>
    );
  }
}

export default ItemComponent;
