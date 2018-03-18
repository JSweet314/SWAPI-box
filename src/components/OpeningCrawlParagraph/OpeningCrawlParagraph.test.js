import React from 'react';
import OpeningCrawlParagraph from './OpeningCrawlParagraph';
import { shallow } from 'enzyme';

describe('OpeningCrawlParagraph', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<OpeningCrawlParagraph paragraph={''}/>);
    expect(wrapper).toMatchSnapshot();
  });
});