// import fetchCategoryData from './fetchCategoryData';
// import mockCategoryFetchResponse from '../mockData/mockCategoryFetchResponse';

// /* eslint-disable no-undef */
// jest.mock('../dataWranglers/categoryDataWrangler/index');
// describe('fetchCategoryData', () => {
//   window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
//     /* eslint-enable no-undef */
//     {
//       ok: true,
//       json: () => Promise.resolve(mockCategoryFetchResponse)
//     }
//   ));

//   it('calls fetch with the correct params', () => {
//     const expected = 'https://swapi.co/api/planets/?format=json&page=1';
//     fetchCategoryData('planets');
//     expect(window.fetch).toHaveBeenCalledWith(expected);
//   });

//   // it('should call categoryDataWrangler with correct params', () => {
//   //   fetchCategoryData('planets');
//   //   expect().toHaveBeenCalledWith();
//   // });
// });