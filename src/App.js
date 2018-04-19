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
      changeTotal: 0.00,
      imgsrc: undefined
    }
    this.setResponse = this.setResponse.bind(this)
    this.resetChange = this.resetChange.bind(this)
    this.setChange = this.setChange.bind(this)
    this.setimg = this.setimg.bind(this)
    this.setImage = this.setImage.bind(this)
}

resetChange() {
  this.setState({
    change: 0
  })
}

componentDidUpdate() {
  this.setImage()
}

setImage() {
  console.log(this.state.state.successful);
  if(this.state.state.successful) {
    switch(this.state.item) {
      case "COKE":
      return this.setimg("http://www.pngall.com/wp-content/uploads/2016/04/Coca-Cola-PNG-Picture.png")
      case "PEPSI":
      return this.setimg("http://pngimg.com/uploads/pepsi/pepsi_PNG8.png")
      case "SODA":
      return this.setimg("http://www.pngall.com/wp-content/uploads/2016/04/Coconut-Free-Download-PNG.png")
      case "WATER":
      return this.setimg("http://www.pngall.com/wp-content/uploads/2016/04/Water-Bottle-PNG-Picture.png")
    }
  }
  this.setimg(undefined)
}


setChange(amount) {
  this.setState({
    change: amount
  })
}

setResponse(data) {
  if(data !== undefined) {
    this.setState({
      item: data.data.first,
      change: data.data.second,
      state: data.data.third,
      changeTotal: data.data.fourth.toFixed(2)
    })
  }
}

setimg(src) {
  if(src !== this.state.imgsrc) {
  this.setState({
    imgsrc: src
  })
}
  console.log(src);
}

  render() {
    return (
      <div className="App">
        <p className="img-title">YOUR ORDER HERE:</p>
        <div className="img-container">
          <img src={this.state.imgsrc}/>
        </div>
        <MachineContainer setResponse={this.setResponse} setChange={this.setChange} setimg={this.setimg} state={this.state}/>
        <BucketContainer state={this.state} resetChange={() =>this.resetChange}/>
      </div>
    );
  }
}

export default App;
