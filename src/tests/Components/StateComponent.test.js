import React from 'react';
import StateComponent from '../../Components/StateComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

var state = {
  coinInventoryState: true,
  stockInventoryState: true,
  balanceState: true
}

it('should render without crashing', () => {
  shallow(<StateComponent state={ state }/>);
});
