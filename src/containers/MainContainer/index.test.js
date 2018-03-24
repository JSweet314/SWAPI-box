import React from 'react';
import {shallow} from 'enzyme';
import MainContainer from './index';
import LocalStorage from '../../__mocks__/localStorageMock';

window.localStorage = new LocalStorage();

describe('MainContainer', () => {
  let wrapper;
  const mockProps = {
    favorites: [],
    /*eslint-disable no-undef*/
    handleFavoriteClick: jest.fn(),
    /*eslint-enable no-undef*/
    match: {
      isExact: false,
      params: {id: 'people'},
      path: "string.isRequired",
      url: "string.isRequired"
    }
  };

  const mockPersonCard = {
    homeworld: "Tatooine",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  };

  beforeEach(() => {
    wrapper = shallow(
      <MainContainer {...mockProps}/>,
      {disableLifecycleMethods: true}
    );
  });

  it('should match a snapshot with no data present', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with data present', () => {
    wrapper.setState({
      people: [mockPersonCard],
      loading: false
    });
    expect(wrapper).toMatchSnapshot();
  });

  // it('');

});