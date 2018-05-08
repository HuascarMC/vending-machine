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
  const wrapper = shallow(<StateComponent state={ state } />);
  const div = wrapper.find('.state-wrapper');
  expect(div.exists()).toEqual(true);
});

it('should render p tag with text state', () => {
  const wrapper = shallow(<StateComponent state={ state } />);
  const p = wrapper.find('p').at(0);
  expect(p.text()).toEqual('state');
});

it('should render p tag with title selector', () => {
  const wrapper = shallow(<StateComponent state={ state } />);
  const p = wrapper.find('.title');
  expect(p.exists()).toEqual(true);
});

it('should render three p tags with state-text selector', () => {
  const wrapper = shallow(<StateComponent state={ state } />);
  const p = wrapper.find('.state-text');
  expect(p.length).toEqual(3);
});

it('should render p tag with text IN STOCK: true', () => {
  const wrapper = shallow(<StateComponent state={ state } />);
  const p = wrapper.find('.state-text').at(0);
  expect(p.text()).toEqual('In Stock: true ');
});

it('should render p tag with text ENOUGH CHANGE: true', () => {
  const wrapper = shallow(<StateComponent state={ state } />);
  const p = wrapper.find('.state-text').at(1);
  expect(p.text()).toEqual('Enough change: true ');
});

it('should render p tag with text ENOUGH BALANCE: true', () => {
  const wrapper = shallow(<StateComponent state={ state } />);
  const p = wrapper.find('.state-text').at(2);
  expect(p.text()).toEqual('Enough balance: true ');
});

it('should match the snapshot', () => {
  const component = renderer.create(<StateComponent state={ state }/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
