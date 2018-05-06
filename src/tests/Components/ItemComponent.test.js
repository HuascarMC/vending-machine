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
});

it('should render div order-img-container', () => {
  const wrapper = shallow(<ItemComponent />);
  const div = wrapper.find('.order-img-container');
  expect(div.exists()).toEqual(true);
});

it('should render order-img', () => {
  const wrapper = shallow(<ItemComponent />);
  const img = wrapper.find('.order-img');
  expect(img.exists()).toEqual(true);
});

it('should render order-img src passed as props', () => {
  const wrapper = shallow(<ItemComponent itemImage='/images/coke.png'/>);
  const img = wrapper.find('.order-img');
  const src = '/images/coke.png';
  expect(img.prop('src')).toEqual(src);
});

it('should match the snapshot', () => {
  const component = renderer.create(<ItemComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
