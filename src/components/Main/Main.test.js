import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});