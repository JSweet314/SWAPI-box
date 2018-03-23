import React from 'react';
import CrawlContainer from './index';
import { shallow } from 'enzyme';

describe('ScrollingText', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <CrawlContainer />, 
      {disableLifecycleMethods: true}
    );
    expect(wrapper).toMatchSnapshot();
  });
});