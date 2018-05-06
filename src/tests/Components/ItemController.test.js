import React from 'react';
import ItemController from '../../Components/ItemController'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

var state = {
  coke: 0,
  pepsi: 0,
  soda: 0,
  water: 0
}

it('should render without crashing', () => {
  shallow(<ItemController items={state}/>);
});

it('should render controller-wrapper div', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const div = wrapper.find('.controller-wrapper');
  expect(div.exists()).toEqual(true);
});

it('should render u-list', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const ul = wrapper.find('ul');
  expect(ul.exists()).toEqual(true);
});

it('should render four list tags', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const li = wrapper.find('li');
  expect((li).length).toBe(4);
});

it('should render coke quantity passed by props', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const li = wrapper.find('li').at(0);
  expect(li.text()).toEqual("COKE  0+-");
});

it('should render pepsi quantity passed by props', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const li = wrapper.find('li').at(1);
  expect(li.text()).toEqual("PEPSI 0+-");
});


it('should render soda quantity passed by props', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const li = wrapper.find('li').at(2);
  expect(li.text()).toEqual("SODA  0+-");
});

it('should render water quantity passed by props', () => {
  const wrapper = shallow(<ItemController items={state}/>);
  const li = wrapper.find('li').at(3);
  expect(li.text()).toEqual("WATER 0+-");
});
