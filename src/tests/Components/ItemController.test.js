import React from 'react';
import ItemController from '../../Components/ItemController'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

var state = {
  coke: 0,
  pepsi: 0,
  soda: 0,
  water: 0
}

it('should render without crashing', () => {
  shallow(<ItemController items={state}/>);
});
