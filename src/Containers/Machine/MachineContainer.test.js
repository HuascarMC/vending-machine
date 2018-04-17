import React from 'react';
import machineContainer from './MachineContainer'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<machineContainer />);
})

it('should render div tags', () => {
 const wrapper = shallow(<machineContainer />);
 const div = wrapper.find("machine");
 expect(diva.exists()).toEqual(false);
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <machineContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
