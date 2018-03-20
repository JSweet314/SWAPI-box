import React from 'react';
import { shallow } from 'enzyme';
import CategoryDisplay from './CategoryDisplay';

describe('CategoryDisplay', () => {
  it('should match a snapshot of the default text', () => {
    const wrapper = shallow(
      <CategoryDisplay 
        categoryData={[]}
        currentCategory={''}
        /* eslint-disable no-undef */
        changeFavCount={jest.fn()}
        selectFavorite={jest.fn()}
        removeFavorite={jest.fn()}
        /* eslint-enable no-undef */
        loading={true}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});