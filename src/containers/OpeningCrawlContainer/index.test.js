import React from 'react';
import CrawlContainer from './index';
import { shallow } from 'enzyme';

describe('ScrollingText', () => {
  it('should match a snapshot with empty state', () => {
    const wrapper = shallow(
      <CrawlContainer />, 
      {disableLifecycleMethods: true}
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with full state', () => {
    const wrapper = shallow(
      <CrawlContainer />,
      { disableLifecycleMethods: true }
    );
    wrapper.setState({
      openingCrawl: "I am placeholder text!",
      title: "A StarWars Movie",
      releaseDate: "2018-03-23"
    });
    expect(wrapper).toMatchSnapshot();
  });
  
  /*eslint-disable max-len*/
  it('should have a method findClosestOpeningCrawl which sets state with localStorage data if available', () => {
  /*eslint-enable max-len*/
    
  });
});