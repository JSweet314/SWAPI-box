import React from 'react';
import { shallow } from 'enzyme';
import CategoryDisplay from './CategoryDisplay';

describe('CategoryDisplay', () => {
  it('should match a snapshot of the default text', () => {
    const wrapper = shallow(
      <CategoryDisplay categoryData={[]} currentCategory='' loading={true}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});