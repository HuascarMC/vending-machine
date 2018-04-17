import React, { Component } from 'react';
import MachineContainer from './Containers/Machine/MachineContainer.js'
import BucketContainer from './Containers/BucketContainer/BucketContainer.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 0,
      state: 0,
      change: [],
      item: 0
    }
    this.setResponse = this.setResponse.bind(this)
    this.parseResponse = this.parseResponse.bind(this)
}

parseResponse(data) {
  this.setState({
    item: this.state.response.data.first,
    change: this.state.response.data.second,
    state: this.state.response.data.third
  })

}

setResponse(data) {
  this.setState({
    response: data
  })
  this.parseResponse(data)
}
  render() {

    return (
      <div className="App">
        <MachineContainer setResponse={this.setResponse} />
        <BucketContainer />
      </div>
    );
  }
}

export default App;
