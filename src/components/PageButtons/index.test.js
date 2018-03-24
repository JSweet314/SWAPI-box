import React from 'react';
import {shallow} from 'enzyme';
import PageButtons from './index';

describe('PageButtons', () => {
  /*eslint-disable no-undef*/
  const mockPageButtonClick = jest.fn();
  /*eslint-enable no-undef*/

  it('should match a snapshot with no previous url passed', () => {
    const wrapper = shallow(
      <PageButtons
        handlePageButtonClick={mockPageButtonClick}
        next="www.whosthebestpuppy.com"
        previous={null} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with no next url passed', () => {
    const wrapper = shallow(
      <PageButtons
        handlePageButtonClick={mockPageButtonClick}
        next={null}
        previous="www.spacejam.com" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with both prev. and next urls passed', () => {
    const wrapper = shallow(
      <PageButtons
        handlePageButtonClick={mockPageButtonClick}
        next="www.whosthebestpuppy.com"
        previous="www.spacejam.com" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});