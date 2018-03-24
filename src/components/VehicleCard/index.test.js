import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from './index';

describe('VehicleCard', () => {
  /* eslint-disable no-undef */
  const mockHandleFavoriteClick = jest.fn();
  /* eslint-enable no-undef */

  const card = {
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    vehicleClass: "wheeled",
    numberOfPassengers: '50'
  };

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <VehicleCard
        handleFavoriteClick={mockHandleFavoriteClick}
        favorites={[]}
        card={card} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show as favorited if name matches obj in favorites array', () => {
    const wrapper = shallow(
      <VehicleCard
        handleFavoriteClick={mockHandleFavoriteClick}
        favorites={[{ name: 'Sand Crawler' }]}
        card={card} />
    );

    expect(wrapper.find('.selected').length).toEqual(1);
  });
});