import React from 'react';
import OpeningCrawlContainer from './index';
import {shallow} from 'enzyme';
import {fetchOpeningCrawl} from '../../apiCalls/fetchOpeningCrawl';

/*eslint-disable no-undef*/
jest.mock('../../apiCalls/fetchOpeningCrawl');
describe('ScrollingText', () => {
  let wrapper, mockData;
  /*eslint-enable no-undef*/
  beforeEach(() => {
    mockData = {
      openingCrawl: "I am placeholder text!",
      title: "A StarWars Movie",
      releaseDate: "2018-03-23"
    };
    wrapper = shallow(
      <OpeningCrawlContainer />, {disableLifecycleMethods: true}
    );
  });

  it('should match a snapshot with empty state', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with full state', () => {
    wrapper.setState(mockData);
    expect(wrapper).toMatchSnapshot();
  });

  test('deployNewCrawl sets state with new data', 
    () => {
      wrapper.instance().deployNewCrawl(mockData);
      expect(wrapper.state()).toEqual(mockData);
    }
  );

  describe('getOpeningCrawl', () => {
    it('should call fetchOpeningCrawl', () => {
      wrapper.instance().getOpeningCrawl();
      expect(fetchOpeningCrawl).toHaveBeenCalled();
    });
  });
});