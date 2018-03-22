import React from 'react';
import {shallow} from 'enzyme';
import VehiclesContainer from './index';

describe('VehicleContainer', () => {
  /* eslint-disable no-undef*/
  const mockHandleOnClick = jest.fn();
  /* eslint-enable no-undef*/
  const mockFavorites = [];

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <VehiclesContainer
        handleOnClick={mockHandleOnClick}
        favorites={mockFavorites} />,
      {disableLifecycleMethods: true}
    );
    expect(wrapper).toMatchSnapshot();
  });
});