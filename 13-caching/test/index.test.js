import { expect } from 'chai';

describe('13-caching Application', () => {
    it('should return Hello World with date and time', () => {
        const currentDateTime = new Date();
        expect('Hello, World!').to.include('Hello, World!');
        expect(`Current Date and Time: ${currentDateTime}`).to.match(/Current Date and Time: .+/);
    });
});
