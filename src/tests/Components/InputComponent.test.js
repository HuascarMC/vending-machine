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
  expect(li.length).toBe(5);
});

it('should render p tags in list tags', () => {
  const wrapper = shallow(<InputComponent />);
  const p = wrapper.find('li').find('p');
  expect(p.length).toBe(5);
});

it('should render p tag with penny value', () => {
  const wrapper = shallow(<InputComponent />);
  const p = wrapper.find('p');
  expect(p.at(0).text()).toEqual('$0.01');
});

it('should render p tag with nickel value', () => {
  const wrapper = shallow(<InputComponent />);
  const p = wrapper.find('p');
  expect(p.at(1).text()).toEqual('$0.05');
});

it('should render p tag with dime value', () => {
  const wrapper = shallow(<InputComponent />);
  const p = wrapper.find('p');
  expect(p.at(2).text()).toEqual('$0.10');
});

xit('should match the snapshot', () => {
  const component = renderer.create(<InputComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
