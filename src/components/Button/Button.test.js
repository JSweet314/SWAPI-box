import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe('button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button 
        btnText="people"
        isSelected='' 
        /* eslint-disable no-undef */
        handleOnClick={jest.fn}
        /* eslint-enable no-undef */
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});