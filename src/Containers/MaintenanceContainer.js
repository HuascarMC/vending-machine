import React from 'react';
import CoinController from '../Components/CoinController'
import ItemController from '../Components/ItemController'


class MaintenanceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsData: 0,
      coinsData: 0
    }
  }

  getItems = () => {
      axios.get('https://vending-machine-server.herokuapp.com/machine/items', { crossdomain: true })
     .then((response) => {
       console.log(response);
       this.setState({
         itemsData: response.data
       })
     })
     .catch(function (error) {
       console.log(error);
     })
  }

  getCoins = () => {
    axios.get('https://vending-machine-server.herokuapp.com/machine/coins', { crossdomain: true})
    .then((response) => {
      console.log(response);
      this.setState({
        itemsData: response.data
      })
    })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return(
      <div className="maintenance-wrapper">
        <CoinController />
        <ItemController />
      </div>
    );
  }
}

export default MaintenanceContainer;
