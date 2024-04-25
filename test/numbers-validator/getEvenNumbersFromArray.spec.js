import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('getEvenNumbersFromArray positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbers).to.deep.equal([2, 4, 6]);
  });

  it('should throw an error for non-array inputs', () => {
    const notAnArray = 'not an array';
    expect(
        () => validator.getEvenNumbersFromArray(notAnArray),
    ).to.throw();
  });

  it('should throw an error for arrays with non-number elements', () => {
    const mixedArray = [1, '2', 3];
    expect(
        () => validator.getEvenNumbersFromArray(mixedArray),
    ).to.throw('[1,2,3] is not an array of "Numbers"');
  });

  it('should return an empty array if no even numbers are present', () => {
    const oddNumbers = [1, 3, 5];
    const evenNumbers = validator.getEvenNumbersFromArray(oddNumbers);
    expect(evenNumbers).to.deep.equal([]);
  });

  it('should handle an empty array input', () => {
    const emptyArray = [];
    const evenNumbers = validator.getEvenNumbersFromArray(emptyArray);
    expect(evenNumbers).to.deep.equal([]);
  });
});
