import React from 'react';
import DisplayComponent from '../../Components/DisplayComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<DisplayComponent value={0.00}/>);
});

it('should render machine-display div', () => {
  const wrapper = shallow(<DisplayComponent value={0.00}/>);
  const div = wrapper.find('.machine-display');
  expect(div.exists()).toEqual(true);
});

it('should render amount inside change display', () => {
  const wrapper = shallow(<DisplayComponent value={0.00}/>);
  const p = wrapper.find('.display-text');
  expect(p.exists()).toEqual(true);
});

it('should match the snapshot', () => {
  const component = renderer.create(<DisplayComponent value={0.00}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
