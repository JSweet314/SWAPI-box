import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  /* eslint-disable no-undef*/
  const mockSelectCategory = jest.fn();
  /* eslint-enable no-undef*/
  
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <Main selectCategory={mockSelectCategory} currentCategory=''/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
