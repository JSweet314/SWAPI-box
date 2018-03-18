import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe('button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button btnText="people"/>);
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});