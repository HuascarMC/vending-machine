import React from 'react';
import GitHubRefComponent from '../../Components/GitHubRefComponent'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GitHubRefComponent />);
});
