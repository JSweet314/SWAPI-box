import React from 'react';
import {shallow} from 'enzyme';
import NavLinks from './index';

it('should match a snapshot', () => {
  const wrapper = shallow(<NavLinks />);
  expect(wrapper).toMatchSnapshot();
});