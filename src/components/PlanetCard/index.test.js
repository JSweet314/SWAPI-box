import React from 'react';
import {shallow} from 'enzyme';
import PlanetCard from './index';

describe('PlanetCard', () => {
  /* eslint-disable no-undef */
  const mockHandleFavoriteClick = jest.fn();
  /* eslint-enable no-undef */
  let card;

  beforeEach(() => {
    card = {
      name: 'tatooine',
      climate: 'arrid',
      terrain: 'mountains',
      population: '1000',
      residents: ['Tom', 'Dick', 'Harry']
    };
  });

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <PlanetCard
        handleFavoriteClick={mockHandleFavoriteClick}
        favorites={[]}
        card={card} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show as favorited if name matches obj in favorites array', () => {
    const wrapper = shallow(
      <PlanetCard
        handleFavoriteClick={mockHandleFavoriteClick}
        favorites={[{ name: 'tatooine' }]}
        card={card} />
    );

    expect(wrapper.find('.selected').length).toEqual(1);
  });

  it('should render "n/a" for planets w/ no residents', () => {
    card.residents = [];
    const wrapper = shallow(
      <PlanetCard
        handleFavoriteClick={mockHandleFavoriteClick}
        favorites={[{ name: 'tatooine' }]}
        card={card} />,
      { disableLifecycleMethods: true }
    );

    expect(wrapper).toMatchSnapshot();
  });
});