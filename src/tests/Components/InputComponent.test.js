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

it('should render input-box list', ()=> {
  const wrapper = shallow(<InputComponent />);
  const div = wrapper.find('.input-box');
  expect(div.exists()).toEqual(true);
});

it('should render five list tags', () => {
  const wrapper = shallow(<InputComponent />);
  const li = wrapper.find('li');
  expect((li).length).toBe(5);
});
