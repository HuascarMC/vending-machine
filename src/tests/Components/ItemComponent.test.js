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
  const div = wrapper.find('.title');
  expect(div.exists()).toEqual(true);
});
