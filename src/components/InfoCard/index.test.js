import React from 'react';
import { shallow } from 'enzyme';
import InfoCard from './index';

describe('InfoCard', () => {
  const card = {
    homeworld: 'tatooine',
    species: 'human',
    name: 'Obi-Wan',
    population: 1000
  };

  it('should match a snapshot', () => {
    const wrapper = shallow(<InfoCard card={card}/>, {disableLifecycleMethods: true});

    expect(wrapper).toMatchSnapshot();
  });
});