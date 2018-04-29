import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './Containers/HeaderContainer'
import BodyContainer from './Containers/BodyContainer'


class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <HeaderContainer />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
