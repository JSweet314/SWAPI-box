import React from 'react';
import { shallow } from 'enzyme';
import MainBtnGroup from './MainBtnGroup';

describe('MainBtnGroup', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<MainBtnGroup />);
    expect(wrapper).toMatchSnapshot();
  });
});
