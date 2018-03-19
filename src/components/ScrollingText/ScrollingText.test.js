import React from 'react';
import ScrollingText from './ScrollingText';
import { shallow } from 'enzyme';

describe('ScrollingText', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<ScrollingText />);
    expect(wrapper).toMatchSnapshot();
  });
});
