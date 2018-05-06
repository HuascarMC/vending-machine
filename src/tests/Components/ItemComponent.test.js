import React from 'react';
import ItemComponent from '../../Components/ItemComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<ItemComponent />);
});

it('should render item-wrapper div', () => {
  const wrapper = shallow(<ItemComponent />);
  const div = wrapper.find('.item-wrapper');
  expect(div.exists()).toEqual(true);
});

it('should render p tag title', () => {
  const wrapper = shallow(<ItemComponent />);
  const p = wrapper.find('.title');
  expect(p.exists()).toEqual(true);
});

it('should render bucket as p tag title', () => {
  const wrapper = shallow(<ItemComponent />);
  const p = wrapper.find('.title');
  expect(p.text()).toEqual('bucket');
})
