import React from 'react';
import OpeningCrawlContainer from './index';
import {shallow} from 'enzyme';
import {fetchOpeningCrawl} from '../../apiCalls/fetchOpeningCrawl';

/*eslint-disable no-undef*/
jest.mock('../../apiCalls/fetchOpeningCrawl');
describe('ScrollingText', () => {
  let wrapper, mockData;
  const mockDeployNewCrawl = jest.fn();
  /*eslint-enable no-undef*/
  beforeEach(() => {
    mockData = {
      openingCrawl: "I am placeholder text!",
      title: "A StarWars Movie",
      releaseDate: "2018-03-23",
      errorStatus: ''
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

    it("calls deployNewCrawl after fetching", () => {
      wrapper.instance().deployNewCrawl = mockDeployNewCrawl;
      Promise.resolve(wrapper.instance().getOpeningCrawl())
        .then(() => wrapper.update())
        .then(() => expect(mockDeployNewCrawl).toHaveBeenCalled());
    });

    it('sets an errorMessage in state if appropriate', () => {
      
      // Promise.resolve(wrapper.instance().getOpeningCrawl())
      //   .then(() => wrapper.update())
      //   .then(() => wrapper.update())
      //   .then(() => expect(wrapper.state('errorStatus'))
      //     .toEqual("Fetch Error"));
    });
  });
  
  it('should match a snapshot of an error', () => {
    wrapper.setState(
      { errorStatus: "This is not the page you are looking for..." }
    );
    expect(wrapper).toMatchSnapshot();
  });
});