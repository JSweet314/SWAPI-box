import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  /* eslint-disable no-undef*/
  const mockChangeFavCount = jest.fn();
  /* eslint-enable no-undef*/
  
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <Main changeFavCount={mockChangeFavCount}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
