import React from 'react';

class ItemComponent extends React.Component {
  render() {
    return(
      <div className="item-wrapper">
        <p className="title">bucket</p>
        <div className="order-img-container">
          <img className="order-img" src={ this.props.itemImage }/>
        </div>
      </div>
    );
  }
}

export default ItemComponent;
