import React from 'react';
import CoinController from '../../Components/CoinController'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

var state = {
  dollar: 0,
  quarter: 0,
  dime: 0,
  nickel: 0,
  penny: 0,
}

it('should render without crashing', () => {
  shallow(<CoinController coins={state}/>);
});
