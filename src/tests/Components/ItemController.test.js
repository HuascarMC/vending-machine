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
