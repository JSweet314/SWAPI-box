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
import {
  mockInitialMainState,
  mockMainProps,
  mockMainPropsPlanetsRoute,
  mockMainPropsVehiclesRoute,
  mockPersonCard,
  mockPlanetCard,
  mockVehicleCard,
  mockPeopleData,
  mockPlanetsData,
  mockVehiclesData,
  mockStoragePeople,
  mockStoragePlanets,
  mockStorageVehicles
} from '../../mockData/mockMainContainerData';
/*eslint-disable no-undef*/
window.localStorage = new LocalStorage();
jest.mock('../../apiCalls/fetchAllHomeworldData');
jest.mock('../../apiCalls/fetchAllResidentsData');
jest.mock('../../apiCalls/fetchAllSpeciesData');
jest.mock('../../apiCalls/fetchPeopleData');
jest.mock('../../apiCalls/fetchPlanetsData');
jest.mock('../../apiCalls/fetchVehiclesData');

describe('MainContainer', () => {
  let wrapper;
  const mockGetDataByRouteId = jest.fn();
  const mockGetPeopleData = jest.fn();
  const mockGetPlanetsData = jest.fn();
  const mockGetVehiclesData = jest.fn();
  const mockGetPreviousPage = jest.fn();
  const mockGetNextPage = jest.fn();
  const mockPersonCards = jest.fn();
  const mockPlanetCards = jest.fn();
  const mockVehicleCards = jest.fn();
  const mockBuildCards = jest.fn();
  // const mockDeployPeopleData = jest.fn();
  // const mockDeployPlanetsData = jest.fn();
  // const mockDeployVehiclesData = jest.fn();
  /*eslint-enable no-undef*/
  
  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(
      <MainContainer {...mockMainProps}/>,
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
        <MainContainer {...mockMainPropsPlanetsRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getPlanetsData = mockGetPlanetsData;
      wrapper.instance().getDataByRouteId();
      expect(mockGetPlanetsData).toHaveBeenCalled();
    });

    it('should be able to call a function for vehicles route', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsVehiclesRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getVehiclesData = mockGetVehiclesData;
      wrapper.instance().getDataByRouteId();
      expect(mockGetVehiclesData).toHaveBeenCalled();
    });
  });

  describe('getPeopleData', () => {
    it('should call fetchPeopleData', () => {
      wrapper.instance().getPeopleData();
      expect(fetchPeopleData).toHaveBeenCalled();
    });

    it('should call fetchPeople with optional URL', () => {
      wrapper.instance().getPeopleData('www.google.com');
      expect(fetchPeopleData).toHaveBeenCalledWith('www.google.com');
    });

    it('should call fetchAllHomeworldData after fetching people data', () => {
      wrapper.instance().getPeopleData();
      wrapper.update();
      expect(fetchAllHomeworldData).toHaveBeenCalled();
    });

    it('should call fetchAllSpeciesData after fetching homeworld data', () => {
      wrapper.instance().getPeopleData();
      wrapper.update().update();
      expect(fetchAllSpeciesData).toHaveBeenCalled();
    });

    // it('should call deployPeopleData after fetching species data', () => {
    //   wrapper.instance().deployPeopleData = mockDeployPeopleData;
    //   wrapper.instance().getPeopleData();
    //   wrapper.update().update().update();
    //   expect(mockDeployPeopleData).toHaveBeenCalled();
    // })
  });

  test('deployPeopleData should set the state with fresh people data', () => {
    expect(wrapper.state()).toEqual(mockInitialMainState);
    const expected = {
      next: "https://swapi.co/api/people/?format=json&page=2",
      previous: null,
      people: [mockPersonCard],
      planets: [],
      vehicles: [],
      loading: false
    };
    wrapper.instance().deployPeopleData(mockPeopleData);
    expect(wrapper.state()).toEqual(expected);
  });
  
  describe('getPlanetsData', () => {
    it('should call fetchPlanetsData', () => {
      wrapper.instance().getPlanetsData();
      expect(fetchPlanetsData).toHaveBeenCalled();
    });

    it('should call fetchPlanetsData with optional URL', () => {
      wrapper.instance().getPlanetsData('www.google.com');
      expect(fetchPlanetsData).toHaveBeenCalledWith('www.google.com');
    });

    it('should call fetchAllResidentsData after fetching people data', 
      () => {
        wrapper.instance().getPlanetsData();
        wrapper.update();
        expect(fetchAllResidentsData).toHaveBeenCalled();
      }
    );

    // it('should call deployPlanetsData after fetching species data', () => {
    //   wrapper.instance().deployPlanetsData = mockDeployPlanetsData;
    //   wrapper.instance().getPlanetsData();
    //   wrapper.update().update().update();
    //   expect(mockDeployPlanetsData).toHaveBeenCalled();
    // });
  });

  it('deployPlanetsData should set the state with fresh planets data', () => {
    expect(wrapper.state()).toEqual(mockInitialMainState);
    const expected = {
      next: "https://swapi.co/api/planets/?format=json&page=2",
      previous: null,
      people: [],
      planets: [mockPlanetCard],
      vehicles: [],
      loading: false
    };
    wrapper.instance().deployPlanetsData(mockPlanetsData);
    expect(wrapper.state()).toEqual(expected);
  });

  describe('getVehiclesData', () => {
    it('should call fetchVehiclesData', () => {
      wrapper.instance().getVehiclesData();
      expect(fetchVehiclesData).toHaveBeenCalled();
    });

    it('should call fetchVehiclesData with optional URL', () => {
      wrapper.instance().getVehiclesData('www.google.com');
      expect(fetchVehiclesData).toHaveBeenCalledWith('www.google.com');
    });

    // it('should call deployVehiclesData after fetching species data', () => {
    //   wrapper.instance().deployVehiclesData = mockDeployVehiclesData;
    //   wrapper.instance().getVehiclesData();
    //   wrapper.update().update().update();
    //   expect(mockDeployVehiclesData).toHaveBeenCalled();
    // });
  });

  it('deployVehiclesData should set the state with fresh vehicle data', () => {
    expect(wrapper.state()).toEqual(mockInitialMainState);
    const expected = {
      next: "https://swapi.co/api/vehicles/?format=json&page=2",
      previous: null,
      people: [],
      planets: [],
      vehicles: [mockVehicleCard],
      loading: false
    };
    wrapper.instance().deployVehiclesData(mockVehiclesData);
    expect(wrapper.state()).toEqual(expected);
  });

  describe("storeCategoryData", () => {
    it('should store data with a category of people', () => {
      expect(localStorage.getItem('SWAPI-people')).not.toBeDefined();
      wrapper.setState({ 
        people: [mockPersonCard],
        next: "https://swapi.co/api/people/?format=json&page=2",
        previous: null});
      wrapper.instance().storeCategoryData();
      const expected = JSON.stringify(mockStoragePeople);
      expect(localStorage.getItem('SWAPI-people')).toEqual(expected);
    });

    it('should store data with a category of planets', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsPlanetsRoute} />,
        { disableLifecycleMethods: true }
      );
      expect(localStorage.getItem('SWAPI-planets')).not.toBeDefined();
      wrapper.setState({
        planets: [mockPlanetCard],
        next: "https://swapi.co/api/planets/?format=json&page=2",
        previous: null
      });
      wrapper.instance().storeCategoryData();
      const expected = JSON.stringify(mockStoragePlanets);
      expect(localStorage.getItem('SWAPI-planets')).toEqual(expected);
    });

    it('should store data with a category of planets', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsVehiclesRoute} />,
        { disableLifecycleMethods: true }
      );
      expect(localStorage.getItem('SWAPI-vehicles')).not.toBeDefined();
      wrapper.setState({
        vehicles: [mockVehicleCard],
        next: "https://swapi.co/api/vehicles/?format=json&page=2",
        previous: null
      });
      wrapper.instance().storeCategoryData();
      const expected = JSON.stringify(mockStorageVehicles);
      expect(localStorage.getItem('SWAPI-vehicles')).toEqual(expected);
    });
  });

  describe('handlePageButtonClick', () => {
    it('should call a function to get next new page',
      () => {
        wrapper.instance().getNextPage = mockGetNextPage;
        wrapper.instance().handlePageButtonClick({ target: { name: "next" } });
        expect(mockGetNextPage).toHaveBeenCalled();
      });

    it('should call a function to get previous new page',
      () => {
        wrapper.instance().getPreviousPage = mockGetPreviousPage;
        wrapper.instance().handlePageButtonClick({target: {name: "previous"}});
        expect(mockGetPreviousPage).toHaveBeenCalled();
      });

    it('should set state with loading as true before getting next page', () => {
      expect(wrapper.state('loading')).toEqual(false);
      wrapper.instance().getNextPage = mockGetNextPage;
      wrapper.instance().handlePageButtonClick({ target: { name: "next" } });
      expect(wrapper.state('loading')).toEqual(true);
    });

    it('should set state with loading as true before getting last page', () => {
      expect(wrapper.state('loading')).toEqual(false);
      wrapper.instance().getPreviousPage = mockGetPreviousPage;
      wrapper.instance().handlePageButtonClick({target: {name: "previous"}});
      expect(wrapper.state('loading')).toEqual(true);
    });
  });

  describe('getNextPage', () => {
    it('should call getPeopleData if the route is people', () => {
      wrapper.instance().getPeopleData = mockGetPeopleData;
      wrapper.setState(
        {next: "https://swapi.co/api/people/?format=json&page=2"}
      );
      wrapper.instance().getNextPage();
      const expectedParam = "https://swapi.co/api/people/?format=json&page=2";
      expect(mockGetPeopleData).toHaveBeenCalledWith(expectedParam);
    });

    it('should call getPlanetsData if the route is planets', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsPlanetsRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getPlanetsData = mockGetPlanetsData;
      wrapper.setState(
        { next: "https://swapi.co/api/planets/?format=json&page=2" }
      );
      wrapper.instance().getNextPage();
      const expectedParam = "https://swapi.co/api/planets/?format=json&page=2";
      expect(mockGetPlanetsData).toHaveBeenCalledWith(expectedParam);
    });

    it('should call getVehiclesData if the route is vehicles', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsVehiclesRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getVehiclesData = mockGetVehiclesData;
      wrapper.setState(
        { next: "https://swapi.co/api/vehicles/?format=json&page=2" }
      );
      wrapper.instance().getNextPage();
      const expectedParam = "https://swapi.co/api/vehicles/?format=json&page=2";
      expect(mockGetVehiclesData).toHaveBeenCalledWith(expectedParam);
    });
  });

  describe('getPreviousPage', () => {
    it('should call getPeopleData if the route is people', () => {
      wrapper.instance().getPeopleData = mockGetPeopleData;
      wrapper.setState(
        { previous: "https://swapi.co/api/people/?format=json&page=1" }
      );
      wrapper.instance().getPreviousPage();
      const expectedParam = "https://swapi.co/api/people/?format=json&page=1";
      expect(mockGetPeopleData).toHaveBeenCalledWith(expectedParam);
    });

    it('should call getPlanetsData if the route is planets', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsPlanetsRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getPlanetsData = mockGetPlanetsData;
      wrapper.setState(
        { previous: "https://swapi.co/api/planets/?format=json&page=1" }
      );
      wrapper.instance().getPreviousPage();
      const expectedParam = "https://swapi.co/api/planets/?format=json&page=1";
      expect(mockGetPlanetsData).toHaveBeenCalledWith(expectedParam);
    });

    it('should call getVehiclesData if the route is vehicles', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsVehiclesRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().getVehiclesData = mockGetVehiclesData;
      wrapper.setState(
        { previous: "https://swapi.co/api/vehicles/?format=json&page=1" }
      );
      wrapper.instance().getPreviousPage();
      const expectedParam = "https://swapi.co/api/vehicles/?format=json&page=1";
      expect(mockGetVehiclesData).toHaveBeenCalledWith(expectedParam);
    });
  });

  describe('buildCards', () => {
    it('should be called when the component renders', () => {
      wrapper.instance().buildCards = mockBuildCards;
      wrapper.instance().render();
      expect(mockBuildCards).toHaveBeenCalled();
    });

    it('should call personCards if the route is people', () => {
      wrapper.instance().personCards = mockPersonCards;
      wrapper.instance().buildCards();
      expect(mockPersonCards).toHaveBeenCalled();
    });

    it('should call getPlanetsData if the route is planets', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsPlanetsRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().planetCards = mockPlanetCards;
      wrapper.instance().buildCards();
      expect(mockPlanetCards).toHaveBeenCalled();
    });

    it('should call getVehiclesData if the route is vehicles', () => {
      wrapper = shallow(
        <MainContainer {...mockMainPropsVehiclesRoute} />,
        { disableLifecycleMethods: true }
      );
      wrapper.instance().vehicleCards = mockVehicleCards;
      wrapper.instance().buildCards();
      expect(mockVehicleCards).toHaveBeenCalled();
    });
  });

  it('personCards should return an array of PersonCards to render', () => {
    wrapper.setState({people: [mockPersonCard]});
    expect(wrapper).toMatchSnapshot();
  });

  it('planetCards should return an array of PlanetCards to render', () => {
    wrapper = shallow(
      <MainContainer {...mockMainPropsPlanetsRoute} />,
      { disableLifecycleMethods: true }
    );
    wrapper.setState({ planets: [mockPlanetCard] });
    expect(wrapper).toMatchSnapshot();
  });

  it('vehicleCards should return an array of VehicleCards to render', () => {
    wrapper = shallow(
      <MainContainer {...mockMainPropsVehiclesRoute} />,
      { disableLifecycleMethods: true }
    );
    wrapper.setState({ vehicles: [mockVehicleCard] });
    expect(wrapper).toMatchSnapshot();
  });
});