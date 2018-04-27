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

  getItems = () => {
      axios.get('https://vending-machine-server.herokuapp.com/machine/items', { crossdomain: true })
     .then((response) => {
       console.log(response);
       this.setState({itemsData: response});
     })
     .catch(function (error) {
       console.log(error);
     })
  }

  getCoins = () => {
    axios.get('https://vending-machine-server.herokuapp.com/machine/coins', { crossdomain: true})
    .then((response) => {
      console.log(response);
      // this.setState({
      //   coinsData: response.data
      // })
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
