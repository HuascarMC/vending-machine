import React from 'react';
import ChangeComponent from '../../Components/ChangeComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<ChangeComponent amount={0.00}/>);
});

it('should generate HTML coin PENNY', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const coin = 'PENNY';
  const actual = wrapper.instance().generateCoin(coin);
  const expected = <p className="coinValue change">{coin.toString()}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p>
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
})
