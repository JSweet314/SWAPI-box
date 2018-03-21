import React from 'react';
import { shallow } from 'enzyme';
import PersonCard from './index';

describe('PersonCard', () => {
  const card = {
    homeworld: 'tatooine',
    species: 'human',
    name: 'Obi-Wan',
    population: '1000'
  };

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <PersonCard 
        favorites={[]}
        currentCategory={''}
        /* eslint-disable no-undef */
        changeFavCount={jest.fn()}
        selectFavorite={jest.fn()}
        removeFavorite={jest.fn()}
        /* eslint-enable no-undef */
        card={card}/>,
      {disableLifecycleMethods: true}
    );

    expect(wrapper).toMatchSnapshot();
  });
});