import React from 'react';
import { shallow } from 'enzyme';
import CategoryDisplay from './CategoryDisplay';

describe('CategoryDisplay', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<CategoryDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});