import React from 'react';
import ChangeTotalDisplay from '../../Components/ChangeTotalDisplay'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<ChangeTotalDisplay amount={0.00}/>);
});
