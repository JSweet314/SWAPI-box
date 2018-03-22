import React from 'react';
import Header from './index';
import {shallow} from 'enzyme';

describe('Header', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<Header numberOfFavorites={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});