import React from 'react';
import DisplayComponent from '../../Components/DisplayComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<DisplayComponent amount={0.00}/>);
});
