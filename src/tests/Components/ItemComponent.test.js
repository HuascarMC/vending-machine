import React from 'react';
import ItemComponent from '../../Components/ItemComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<ItemComponent />);
});
