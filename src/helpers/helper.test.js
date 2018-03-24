import {addCommas} from './helper';

describe('addCommas', () => {
  it('should add commas to a string of numbers', () =>{
    expect(addCommas("2000000000")).toEqual("2,000,000,000");
  });
});