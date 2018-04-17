import React from 'react';
import machineContainer from './MachineContainer'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<machineContainer />);
})

it('should render div tags', () => {
 const wrapper = shallow(<machineContainer />);
 const machine = wrapper.find('.machine');
 expect(machine.exists()).toEqual(true);
})

it('should match the snapshot', () => {
 const component = renderer.create(
  <machineContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
