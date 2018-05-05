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

it('should render five list tags', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const li = wrapper.find('li');
  expect((li).length).toBe(5);
});

it('should render dollar quantity passed by props', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const li = wrapper.find('li').at(0);
  expect(li.text()).toEqual("DOLL 0+-");
});

it('should render quarter quantity passed by props', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const li = wrapper.find('li').at(1);
  expect(li.text()).toEqual("QUAR 0+-");
});

it('should render dime quantity passed by props', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const li = wrapper.find('li').at(2);
  expect(li.text()).toEqual("DIME 0+-");
});

it('should render nickel quantity passed by props', () => {
  const wrapper = shallow(<CoinController coins={state}/>);
  const li = wrapper.find('li').at(3);
  expect(li.text()).toEqual("NICK 0+-");
});
