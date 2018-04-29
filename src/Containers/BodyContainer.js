import React from 'react';
import OrderContainer from './OrderContainer'
import MaintenanceContainer from './MaintenanceContainer'
import MachineContainer from './MachineContainer'
import ChangeContainer from './ChangeContainer'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      change: 0.00,
      transactionState: "",
      itemImage: undefined
    }
    this.updateChange = this.updateChange.bind(this);
    this.updateTransactionState = this.updateTransactionState.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  setResponse(response) {
    if(response !== undefined) {
      this.setState({
        change: response.data.fourth,
        transactionState: response.data.third
      })
    }
    this.setImage(response.data.first)
  }


  setImage(item) {
      switch(item) {
        case "COKE":
        return this.setState({itemImage: "/images/coke.png"})
        case "PEPSI":
        return this.setState({itemImage: "/images/pepsi.png"})
        case "SODA":
        return this.setState({itemImage: "/images/coconut.png"})
        case "WATER":
        return this.setState({itemImage: "/images/water.png"})
      }
    this.setState({itemImage: undefined})
  }

  updateChange(amount) {
    this.setState({
      change: amount
    })
  }

  updateTransactionState(state) {
    this.setState({
      transactionState: state
    })
  }

  render() {
    return(
      <div className="content-wrapper">
        <OrderContainer state={ this.state }/>
        <MaintenanceContainer />
        <MachineContainer updateChange={ this.updateChange } updateTransactionState={ this.updateTransactionState } setResponse={ this.setResponse }/>
        <ChangeContainer change={ this.state.change.toFixed(2) }/>
      </div>
    );
  }
}

export default BodyContainer;
