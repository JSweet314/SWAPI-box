import React from 'react';
import {shallow} from 'enzyme';
import Favorites from './index';
import {mockFavorites} from '../../mockData/mockFavorites';

describe('Favorites', () => {
  /*eslint-disable no-undef*/
  const mockHandleFavoriteClick = jest.fn();
  /*eslint-disable no-undef*/

  it('should match a snapshot without favorites', () => {
    const wrapper = shallow(
      <Favorites
        favorites={[]}
        handleFavoriteClick={mockHandleFavoriteClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with favorites', () => {
    const wrapper = shallow(
      <Favorites
        favorites={mockFavorites}
        handleFavoriteClick={mockHandleFavoriteClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});