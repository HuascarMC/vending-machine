import React from 'react';
import CoinController from '../Components/CoinController'
import ItemController from '../Components/ItemController'
import axios from 'axios'


class MaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dollar: 0,
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0,
      coke: 0,
      pepsi: 0,
      soda: 0,
      water: 0
    }
  }

  setItemsQuantity(data) {
    this.setState({
      coke: data[0].quantity,
      pepsi: data[1].quantity,
      soda: data[2].quantity,
      water: data[3].quantity
    })
  }

  setCoinsQuantity(data) {
    this.setState({
      dollar: data[0].quantity,
      quarter: data[1].quantity,
      dime: data[2].quantity,
      nickel: data[3].quantity,
      penny: data[4].quantity
    })
  }

  getItems = () => {
      axios.get('http://localhost:4567/machine/items', { crossdomain: true })
     .then((response) => {
       this.setItemsQuantity(response.data);
     })
     .catch(function (error) {
       console.log(error);
     })
  }

  getCoins = () => {
    axios.get('http://localhost:4567/machine/coins', { crossdomain: true})
    .then((response) => {
      this.setCoinsQuantity(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    this.getCoins();
    this.getItems();
    return(
      <div className="maintenance-wrapper">
        <CoinController coins={ this.state }/>
        <ItemController items={ this.state }/>
      </div>
    );
  }
}

export default MaintenanceContainer;
