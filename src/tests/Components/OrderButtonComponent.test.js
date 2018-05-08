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

it('should render two order-button display', () => {
  const wrapper = shallow(<OrderButtonComponent />);
  const buttons = wrapper.find('.order-button');
  expect(buttons.length).toEqual(2);
});

it('should render first button text return', () => {
  const wrapper = shallow(<OrderButtonComponent />);
  const buttons = wrapper.find('.order-button');
  expect(buttons.at(0).text()).toEqual('RETURN');
});

it('should render second button text push', () => {
  const wrapper = shallow(<OrderButtonComponent />);
  const buttons = wrapper.find('.order-button');
  expect(buttons.at(1).text()).toEqual('PUSH');
});

it('should match the snapshot', () => {
  const component = renderer.create(<OrderButtonComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
