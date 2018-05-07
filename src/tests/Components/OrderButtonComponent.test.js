import React from 'react';
import OrderButtonComponent from '../../Components/OrderButtonComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<OrderButtonComponent />);
});
