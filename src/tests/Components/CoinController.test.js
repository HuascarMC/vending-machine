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

it('should render controller-wrapper div', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const div = wrapper.find('.controller-wrapper');
  expect(div.exists()).toEqual(true);
});

it('should render u-list', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const ul = wrapper.find('ul');
  expect(ul.exists()).toEqual(true);
});
