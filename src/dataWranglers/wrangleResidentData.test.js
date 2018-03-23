import {wrangleResidentData} from './wrangleResidentData';
import {mockSinglePersonData as mockData} from 
  '../mockData/mockSinglePersonData';

describe('wrangleResidentData', () => {
  it('should take in a single persons data and return their name', () => {
    expect(wrangleResidentData(mockData)).toEqual("Luke Skywalker");
  });
});