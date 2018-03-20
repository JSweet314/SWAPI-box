import React from 'react';
import ScrollingText from './index';
import { shallow } from 'enzyme';

describe('ScrollingText', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<ScrollingText />, {disableLifecycleMethods: true});
    expect(wrapper).toMatchSnapshot();
  });
});