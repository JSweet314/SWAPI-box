import React from 'react';
import {shallow} from 'enzyme';
import MainContainer from './index';
import LocalStorage from '../../__mocks__/localStorageMock';
import {fetchAllHomeworldData} from '../../apiCalls/fetchAllHomeworldData';
import {fetchAllResidentsData} from '../../apiCalls/fetchAllResidentsData';
import {fetchAllSpeciesData} from '../../apiCalls/fetchAllSpeciesData';
import {fetchPeopleData} from '../../apiCalls/fetchPeopleData';
import {fetchPlanetsData} from '../../apiCalls/fetchPlanetsData';
import {fetchVehiclesData} from '../../apiCalls/fetchVehiclesData';

window.localStorage = new LocalStorage();

describe('MainContainer', () => {
  /*eslint-disable no-undef*/
  let wrapper;
  const mockGetDataByRouteId = jest.fn();
  const mockGetPeopleData = jest.fn();
  const mockGetPlanetsData = jest.fn();
  const mockGetVehiclesData = jest.fn();
  const mockProps = {
    favorites: [],
    handleFavoriteClick: jest.fn(),
    match: {
      isExact: false,
      params: {id: 'people'},
      path: "/category/:id",
      url: "/category/people"
    }
  };
  const mockPropsPlanetsRoute = {
    favorites: [],
    handleFavoriteClick: jest.fn(),
    match: {
      isExact: false,
      params: { id: 'planets' },
      path: "/category/:id",
      url: "/category/people"
    }
  };
  const mockPropsVehiclesRoute = {
    favorites: [],
    handleFavoriteClick: jest.fn(),
    match: {
      isExact: false,
      params: { id: 'vehicles' },
      path: "/category/:id",
      url: "/category/people"
    }
  };
  const mockPersonCard = {
    homeworld: "Tatooine",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  };
  const mockStoragePeople = {
    next: "https://swapi.co/api/people/?format=json&page=2",
    previous: null,
    dataArray: [mockPersonCard]
  };
  /*eslint-enable no-undef*/
  beforeEach(() => {
    localStorage.clear();
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

  describe('findClosestData', ()=>{
    test('should pull from localStorage if possible', () => {
      localStorage.setItem('SWAPI-people', JSON.stringify(mockStoragePeople));
      expect(wrapper.state('people')).toEqual([]);
      wrapper.instance().findClosestData();
      expect(wrapper.state('people')).toEqual([mockPersonCard]);
    });

    it('should call a function if localStorage is not possible', 
      () => {
        wrapper.instance().getDataByRouteId = mockGetDataByRouteId;
        wrapper.instance().findClosestData();
        expect(mockGetDataByRouteId).toHaveBeenCalled();
      }
    );

    it('sets loading to true in state if a fetch in needed',
      () => {
        expect(wrapper.state('loading')).toEqual(false);
        wrapper.instance().getDataByRouteId = mockGetDataByRouteId;
        wrapper.instance().findClosestData();
        expect(wrapper.state('loading')).toEqual(true);
      }
    ); 
  });

  describe('getDataByRouteId', () => {
    it('should call another function based on route id', () => {
      wrapper.instance().getPeopleData = mockGetPeopleData;
      wrapper.instance().getDataByRouteId();
      expect(mockGetPeopleData).toHaveBeenCalled();
    });

    it('should be able to call a function for planets route', () => {
      wrapper = shallow(
        <MainContainer {...mockPropsPlanetsRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getPlanetsData = mockGetPlanetsData;
      wrapper.instance().getDataByRouteId();
      expect(mockGetPlanetsData).toHaveBeenCalled();
    });

    it('should be able to call a function for vehicles route', () => {
      wrapper = shallow(
        <MainContainer {...mockPropsVehiclesRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getVehiclesData = mockGetVehiclesData;
      wrapper.instance().getDataByRouteId();
      expect(mockGetVehiclesData).toHaveBeenCalled();
    });
  });

  describe('getPeopleData', () => {});
  describe('deployPeopleData', () => {});
  describe('getPlanetsData', () => {});
  describe('deployPlanetsData', () => {});
  describe('getVehiclesData', () => {});
  describe('deployVehiclesData', () => {});


});