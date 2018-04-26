import React from 'react';
import OrderContainer from './OrderContainer'

class BodyContainer extends React.Component {


  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer />
      </div>
    );
  }
}

export default BodyContainer;
