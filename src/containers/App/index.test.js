import React from 'react';
import {shallow} from 'enzyme';
import App from './index';
import LocalStorage from '../../__mocks__/localStorageMock';

window.localStorage = new LocalStorage();

describe('App', () => {
  let wrapper;
  /*eslint-disable no-undef*/
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  const mockStoreFavorites = jest.fn();
  const mockRetrieveFavorites = jest.fn();
  /*eslint-enable no-undef*/
  const mockFavorite = {
    category: "people",
    homeworld: "Tatooine",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  };

  const mockCard = {
    homeworld: "Tatooine",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  };

  const mockStorageFavorites = JSON.stringify({
    favorites: [mockFavorite],
    numberOfFavorites: 1
  });

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      favorites: [],
      numberOfFavorites: 0
    });
  });

  it('should be able add favorited cards to its favorites in state', () => {
    expect(wrapper.state('favorites')).toEqual([]);
    wrapper.instance().addFavorite(mockFavorite);
    expect(wrapper.state('favorites')).toEqual([mockFavorite]);
  });

  it('should keep track of the number of favorites', () => {
    expect(wrapper.state('numberOfFavorites')).toEqual(0);
    wrapper.instance().addFavorite(mockFavorite);
    expect(wrapper.state('numberOfFavorites')).toEqual(1);
  });

  it('should be able to store cards in localStorage', () => {
    wrapper.setState({favorites: [mockFavorite], numberOfFavorites: 1});
    expect(localStorage.getItem('SWAPI-favorites')).not.toBeDefined();
    wrapper.instance().storeFavorites();
    expect(localStorage.getItem('SWAPI-favorites'))
      .toEqual(mockStorageFavorites);
  });

  it('should store favorited cards in localStorage when selected', () => {
    wrapper.instance().storeFavorites = mockStoreFavorites;
    wrapper.instance().addFavorite(mockFavorite);
    expect(mockStoreFavorites).toHaveBeenCalled();
  });

  it('should be able to remove favorited cards', () => {
    wrapper.setState({ favorites: [mockFavorite], numberOfFavorites: 1 });
    wrapper.instance().removeFavorite("Luke Skywalker");
    expect(wrapper.state('favorites')).toEqual([]);
    expect(wrapper.state('numberOfFavorites')).toEqual(0);
  });

  it('should update localStorage after removing a favorite', () => {
    wrapper.setState({ favorites: [mockFavorite], numberOfFavorites: 1 });
    wrapper.instance().storeFavorites();
    expect(localStorage.getItem('SWAPI-favorites'))
      .toEqual(mockStorageFavorites);
    wrapper.instance().removeFavorite("Luke Skywalker");
    const mockEmptyStorage = JSON.stringify({
      favorites: [], 
      numberOfFavorites: 0
    });
    expect(localStorage.getItem('SWAPI-favorites')).toEqual(mockEmptyStorage);
  });

  it('should be able to retrieve all favorites and numberOf from localStorage',
    () => {
      expect(wrapper.state('favorites')).toEqual([]);
      expect(wrapper.state('numberOfFavorites')).toEqual(0);
      localStorage.setItem('SWAPI-favorites', mockStorageFavorites);
      wrapper.instance().retrieveFavorites();
      expect(wrapper.state('favorites')).toEqual([mockFavorite]);
      expect(wrapper.state('numberOfFavorites')).toEqual(1);
    });

  it('should call retrieveFavorites when App mounts', () => {
    wrapper.instance().retrieveFavorites = mockRetrieveFavorites;
    wrapper.instance().componentDidMount();
    expect(mockRetrieveFavorites).toHaveBeenCalled();
  });

  test('handleFavoriteClick should call addFavorite',
    () => {
      wrapper.instance().addFavorite = mockAddFavorite;
      wrapper.instance().handleFavoriteClick(mockCard, 'people');
      const expectedParam = { ...mockCard, category: 'people' };
      expect(mockAddFavorite).toHaveBeenCalledWith(expectedParam);
    }
  );

  test('handleFavoriteClick should remove a favorite if already favorited',
    () => {
      wrapper.instance().removeFavorite = mockRemoveFavorite;
      wrapper.setState({ favorites: [mockFavorite], numberOfFavorites: 1 });
      wrapper.instance().handleFavoriteClick(mockCard, 'people');
      expect(mockRemoveFavorite).toHaveBeenCalledWith("Luke Skywalker");
    }
  );
});
