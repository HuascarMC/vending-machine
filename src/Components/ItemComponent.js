import React from 'react';

class ItemComponent extends React.Component {
  render() {
    return(
      <div className="item-wrapper">
        <p className="title">bucket</p>
        <div className="order-img">
          <img src="http://www.pngall.com/wp-content/uploads/2016/04/Coca-Cola-PNG-Picture.png"/>
        </div>
      </div>
    );
  }
}

export default ItemComponent;
