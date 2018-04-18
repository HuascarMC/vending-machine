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
      item: 0
    }
    this.setResponse = this.setResponse.bind(this)
}


setResponse(data) {
  console.log(data.data);
  if(data !== undefined) {
    this.setState({
      item: data.data.first,
      change: data.data.second,
      state: data.data.third
    })
  }
}

  render() {

    return (
      <div className="App">
        <MachineContainer setResponse={this.setResponse} />
        <BucketContainer item={this.state.item} change={this.state.change} state={this.state.state}/>
      </div>
    );
  }
}

export default App;
