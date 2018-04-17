import React, { Component } from 'react';
import MachineContainer from './Containers/Machine/MachineContainer.js'
import BucketContainer from './Containers/BucketContainer/BucketContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MachineContainer />
        <BucketContainer />
      </div>
    );
  }
}

export default App;
