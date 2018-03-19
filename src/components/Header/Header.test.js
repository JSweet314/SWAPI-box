import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header numberOfFavorites={0} />);
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});