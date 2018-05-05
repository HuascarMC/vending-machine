import React from 'react';
import ChangeComponent from '../../Components/ChangeComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

xit('should render without crashing', () => {
  shallow(<ChangeComponent />);
});
