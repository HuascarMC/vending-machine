import React from 'react';
import GitHubRefComponent from '../../Components/GitHubRefComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GitHubRefComponent />);
});

it('should render github-logo div', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const div = wrapper.find('.github-logo');
  expect(div.exists()).toEqual(true);
});

it('should render hyperlink tag', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const a = wrapper.find('a');
  expect(a.exists()).toEqual(true);
});

it('should have correct href in hyperlink tag', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const src = 'https://github.com/HuascarMC/vending-machine-server/tree/heroku-deploy';
  const a = wrapper.find('a');
  expect(a.prop('href')).toEqual(src);
});

it('should render hyperlink tag with a blank target', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const target = '_blank';
  const a = wrapper.find('a');
  expect(a.prop('target')).toEqual(target);
});

it('should render img tag inside hyperlink tag', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const img = wrapper.find('a').find('img');
  expect(img.exists()).toEqual(true);
});

it('should render img tag with correct src', () => {
  const wrapper = shallow(<GitHubRefComponent/>);
  const img = wrapper.find('a').find('img');
  const src = '/images/github-logo.png';
  expect(img.prop('src')).toEqual(src)
});
