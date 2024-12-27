import { expect } from 'chai';
import { add } from '../src/index.js';

describe('add()', () => {
    it('should return the sum of two numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should return 0 when both numbers are 0', () => {
        expect(add(0, 0)).to.equal(0);
    });
});
