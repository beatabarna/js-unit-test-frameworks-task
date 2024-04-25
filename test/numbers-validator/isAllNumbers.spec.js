import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe('isAllNumbers positive tests', () => {
    let validator;

    beforeEach(() =>{
        validator = new NumbersValidator;
    });

    afterEach(() => {
        validator = null;
    });

    it('should return true when provided with an array containing only numbers', () => {
        const arrayOfNumbers = [1, 2, 3, 4, 5];
        const result = validator.isAllNumbers(arrayOfNumbers);
        expect(result).to.be.equal(true);
    });

    it('should throw an error when provided with a string', () => {
        expect(() => {
            validator.isAllNumbers('1')
        }).to.throw('[1] is not an array');
    });

    it('should return true for an empty array', () => {
        const result = validator.isAllNumbers([]);
        expect(result).to.be.equal(true);
    });
});