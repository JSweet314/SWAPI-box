import React from 'react';
import {shallow} from 'enzyme';
import PersonCard from './index';

describe('PersonCard', () => {
  /* eslint-disable no-undef */
  const mockHandleOnClick = jest.fn();
  /* eslint-enable no-undef */
  const card = {
    homeworld: 'tatooine',
    species: 'human',
    name: 'Obi-Wan',
    population: '1000'
  };

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <PersonCard
        handleOnClick={mockHandleOnClick}
        favorites={[]}
        card={card} />,
      { disableLifecycleMethods: true }
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show as favorited if name matches obj in favorites array', () => {
    const wrapper = shallow(
      <PersonCard 
        handleOnClick={mockHandleOnClick}
        favorites={[{name: 'Obi-Wan'}]}
        card={card} />,
      { disableLifecycleMethods: true }
    );

    expect(wrapper.find('.selected').length).toEqual(1);
  });
});