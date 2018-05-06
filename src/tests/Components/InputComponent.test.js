import React from 'react';
import InputComponent from '../../Components/InputComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<InputComponent />);
});
