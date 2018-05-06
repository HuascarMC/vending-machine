import React from 'react';
import InputComponent from '../../Components/InputComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<InputComponent />);
});

it('should render input-wrapper div', () => {
  const wrapper = shallow(<InputComponent />);
  const div = wrapper.find('.input-wrapper');
  expect(div.exists()).toEqual(true);
});
