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

it('should generate HTML coin DOLLAR', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const coin = 'DOLLAR';
  const actual = wrapper.instance().generateCoin(coin);
  const expected = <p className="coinValue change">{coin.toString()}<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p>
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
});

it('should generate HTML change in coins given array of change', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const change = ['PENNY', 'NICKEL'];
  const actual = wrapper.instance().generateChange(change);
  const penny = <p className="coinValue change">{change[0]}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p>;
  const nickel = <p className="coinValue change">{change[1]}<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p>;
  const expected = [nickel, penny];
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
});

it('should render change-box div', () => {
  const wrapper = shallow(<ChangeComponent amount={0.00}/>);
  const div = wrapper.find('.change-box');
  expect(div.exists()).toEqual(true);
});

it('should match the snapshot', () => {
  const component = renderer.create(<ChangeComponent amount={0.00}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
