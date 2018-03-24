import React from 'react';
import OpeningCrawlContainer from './index';
import { shallow } from 'enzyme';
import LocalStorage from '../../__mocks__/localStorageMock';

window.localStorage = new LocalStorage;

describe('ScrollingText', () => {
  let wrapper, mockData;
  /*eslint-disable no-undef*/
  const mockStoreOpeningCrawl = jest.fn();
  const mockGetOpeningCrawl = jest.fn();
  /*eslint-enable no-undef*/

  beforeEach(() => {
    localStorage.clear();
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

  test('findClosestOpeningCrawl sets state w/ localStorage data if available', 
    () => {
      const initial = { openingCrawl: "", title: "", releaseDate: "" };
      localStorage.setItem('SWAPI-crawl', JSON.stringify(mockData));
      expect(wrapper.state()).toEqual(initial);
      wrapper.instance().findClosestOpeningCrawl();
      expect(wrapper.state()).toEqual(mockData);
    }
  );

  test('findClosestOpeningCrawl calls getOpeningCrawl if no localStorage', 
    () => {
      wrapper.instance().getOpeningCrawl = mockGetOpeningCrawl;
      wrapper.instance().findClosestOpeningCrawl();
      expect(mockGetOpeningCrawl).toHaveBeenCalled();
    }
  );

  test('deployNewCrawl sets state with new data and calls storeOpeningCrawl', 
    () => {
      wrapper.instance().storeOpeningCrawl = mockStoreOpeningCrawl;
      wrapper.instance().deployNewCrawl(mockData);
      expect(wrapper.state()).toEqual(mockData);
      expect(mockStoreOpeningCrawl).toHaveBeenCalled();
    }
  );

  test('storeOpeningCrawl stores the state in localStorage', () => {
    const expected = JSON.stringify(mockData);
    expect(localStorage.getItem('SWAPI-crawl')).not.toBeDefined();
    wrapper.setState(mockData);
    wrapper.instance().storeOpeningCrawl();
    expect(localStorage.getItem('SWAPI-crawl')).toEqual(expected);
  });
});