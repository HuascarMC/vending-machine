import React from 'react';
import StateComponent from '../../Components/StateComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

var state = {
  coinInventoryState: true,
  stockInventoryState: true,
  balanceState: true
}

it('should render without crashing', () => {
  shallow(<StateComponent state={ state } />);
});

it('should render state-wrapper div', () => {
  const wrapper = shallow(<StateComponent state={ state} />);
  const div = wrapper.find('.state-wrapper');
  expect(div.exists()).toEqual(true);
});

it('should render p tag with text state', () => {
  const wrapper = shallow(<StateComponent state={ state} />);
  const p = wrapper.find('p').at(0);
  expect(p.text()).toEqual('state');
});

it('should render p tag with title selector', () => {
  const wrapper = shallow(<StateComponent state={ state} />);
  const p = wrapper.find('.title');
  expect(p.exists()).toEqual(true);
});
