import React from 'react';
import ChangeComponent from '../../Components/ChangeComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<TableContainer />);
})
