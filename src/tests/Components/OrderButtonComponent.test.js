import React from 'react';
import OrderButtonComponent from '../../Components/OrderButtonComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<OrderButtonComponent />);
});

it('should render order-button-wrapper div', () => {
  const wrapper = shallow(<OrderButtonComponent />);
  const div = wrapper.find('.order-button-wrapper');
  expect(div.exists()).toEqual(true);
});
