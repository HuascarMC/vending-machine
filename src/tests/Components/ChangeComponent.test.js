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
});

it('should generate HTML coin NICKEL', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const coin = 'NICKEL';
  const actual = wrapper.instance().generateCoin(coin);
  const expected = <p className="coinValue change">{coin.toString()}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p>
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
});

it('should generate HTML coin DIME', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const coin = 'DIME';
  const actual = wrapper.instance().generateCoin(coin);
  const expected = <p className="coinValue change">{coin.toString()}<button className="coin silver" onClick={ () => this.updateBalance(0.10) }></button></p>
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
});

it('should generate HTML coin QUARTER', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const coin = 'QUARTER';
  const actual = wrapper.instance().generateCoin(coin);
  const expected = <p className="coinValue change">{coin.toString()}<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p>
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
});
