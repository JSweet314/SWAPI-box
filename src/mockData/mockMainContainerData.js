/* eslint-disable no-undef */
export const mockGetDataByRouteId = jest.fn();
export const mockGetPeopleData = jest.fn();
export const mockGetPlanetsData = jest.fn();
export const mockGetVehiclesData = jest.fn();
export const mockGetPreviousPage = jest.fn();
export const mockGetNextPage = jest.fn();
export const mockPersonCards = jest.fn();
export const mockPlanetCards = jest.fn();
export const mockVehicleCards = jest.fn();
export const mockBuildCards = jest.fn();
export const mockDeployPeopleData = jest.fn();
export const mockDeployPlanetsData = jest.fn();
export const mockDeployVehiclesData = jest.fn();
export const mockInitialMainState = {
  people: [],
  planets: [],
  vehicles: [],
  next: null,
  previous: null,
  loading: false,
  errorStatus: ''
};
export const mockMainProps = {
  favorites: [],
  handleFavoriteClick: jest.fn(),
  match: {
    isExact: false,
    params: { id: 'people' },
    path: "/category/:id",
    url: "/category/people"
  }
};
export const mockMainPropsPlanetsRoute = {
  favorites: [],
  handleFavoriteClick: jest.fn(),
  match: {
    isExact: false,
    params: { id: 'planets' },
    path: "/category/:id",
    url: "/category/people"
  }
};
export const mockMainPropsVehiclesRoute = {
  favorites: [],
  handleFavoriteClick: jest.fn(),
  match: {
    isExact: false,
    params: { id: 'vehicles' },
    path: "/category/:id",
    url: "/category/people"
  }
};
export const mockPersonCard = {
  homeworld: "Tatooine",
  name: "Luke Skywalker",
  population: "200000",
  species: "Human"
};
export const mockPlanetCard = {
  name: "Alderaan",
  population: "2000000000",
  terrain: "grasslands, mountains",
  climate: "temperate",
  residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]
};
export const mockVehicleCard = {
  name: "Sand Crawler",
  model: "Digger Crawler",
  vehicleClass: "wheeled",
  numberOfPassengers: "30"
};
export const mockStoragePeople = {
  next: "https://swapi.co/api/people/?format=json&page=2",
  previous: null,
  dataArray: [mockPersonCard]
};
export const mockStoragePlanets = {
  next: "https://swapi.co/api/planets/?format=json&page=2",
  previous: null,
  dataArray: [mockPlanetCard]
};
export const mockStorageVehicles = {
  next: "https://swapi.co/api/vehicles/?format=json&page=2",
  previous: null,
  dataArray: [mockVehicleCard]
};
export const mockPeopleData = {
  next: "https://swapi.co/api/people/?format=json&page=2",
  previous: null,
  peopleArray: [mockPersonCard]
};
export const mockPlanetsData = {
  next: "https://swapi.co/api/planets/?format=json&page=2",
  previous: null,
  planetsArray: [mockPlanetCard]
};
export const mockVehiclesData = {
  next: "https://swapi.co/api/vehicles/?format=json&page=2",
  previous: null,
  vehiclesArray: [mockVehicleCard]
};