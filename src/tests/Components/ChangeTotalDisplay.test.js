import React from 'react';
import ChangeTotalDisplay from '../../Components/ChangeTotalDisplay'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<ChangeTotalDisplay amount={0.00}/>);
});

it('should render change-display div', () => {
  const wrapper = shallow(<ChangeTotalDisplay amount={0.00}/>);
  const div = wrapper.find('.change-display');
  expect(div.exists()).toEqual(true);
});

it('should match the snapshot', () => {
  const component = renderer.create(<ChangeTotalDisplay amount={0.00}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
