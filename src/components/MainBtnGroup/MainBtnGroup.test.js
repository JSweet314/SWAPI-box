import React from 'react';
import { shallow } from 'enzyme';
import MainBtnGroup from './MainBtnGroup';

describe('MainBtnGroup', () => {
  /* eslint-disable no-undef*/
  const mockIsSelected = jest.fn();
  /* eslint-enable no-undef*/

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <MainBtnGroup selectCategory={mockIsSelected} currentCategory=''/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});