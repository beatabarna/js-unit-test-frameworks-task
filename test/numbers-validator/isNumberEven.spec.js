import { NumbersValidator } from '../../app/numbers_validator.js';
import { expect } from 'chai';

describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided with an object', () => {
    expect(() =>
      validator.isNumberEven({})
    ).to.throw('[[object Object]] is not of type "Number" it is of type "object"');
  });

  it('should throw an error when provided with undefined', () => {
    expect(() =>
      validator.isNumberEven(undefined)
    ).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error when called without any parameters', () => {
    expect(() => {
      validator.isNumberEven()
    }).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });


});
