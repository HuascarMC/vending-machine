import React, { Component } from 'react';
import MachineContainer from './Containers/Machine/MachineContainer.js'
import BucketContainer from './Containers/BucketContainer/BucketContainer.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
      change: 0,
      item: 0,
      changeTotal: 0.00
    }
    this.setResponse = this.setResponse.bind(this)
    this.resetChange = this.resetChange.bind(this)
    this.setChange = this.setChange.bind(this)
}

resetChange() {
  this.setState({
    change: 0
  })
}


setChange(amount) {
  this.setState({
    change: amount
  })
}

setResponse(data) {
  console.log(data.data);
  if(data !== undefined) {
    this.setState({
      item: data.data.first,
      change: data.data.second,
      state: data.data.third,
      changeTotal: data.data.fourth.toFixed(2)
    })
  }
}

  render() {

    return (
      <div className="App">
        <MachineContainer setResponse={this.setResponse} setChange={this.setChange} />
        <BucketContainer item={this.state.item} resetChange={() =>this.resetChange}  change={this.state.change} state={this.state.state} changeTotal={this.state.changeTotal} returnValue={this.state.returnChangeValue}/>
      </div>
    );
  }
}

export default App;
