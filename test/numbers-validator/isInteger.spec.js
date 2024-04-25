import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe('isInteger positive tests', () => {
    let validator;

    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });

    it('should return true when provided with an integer', () => {
        const result = validator.isInteger(1);
        expect(result).to.be.equal(true);
    });

    it('should throw an error when provided with a string', () => {
        expect(() => {
            validator.isInteger('1')
        }).to.throw("[1] is not a number");
    });

    it('should throw an error when called without any arguments', () => {
        expect(() => {
            validator.isInteger()
        }).to.throw('[undefined] is not a number');
    });
});