import {fetchAllResidentsData} from './fetchAllResidentsData';
import {fetchName} from './fetchName';
/*eslint-disable no-undef*/
jest.mock('./fetchName');
/*eslint-enable no-undef*/
describe('fetchAllResidentsData', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    /* eslint-enable no-undef */
    {
      ok: true,
      json: () => Promise.resolve(mockSpeciesData)
    }
  ));

  it('should call fetchName for every person in an objects peopleArray',
    () => {
      fetchName();
      expect(fetchName).toHaveBeenCalledTimes(1);
    });
});