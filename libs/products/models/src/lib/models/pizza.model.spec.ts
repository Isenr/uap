import { Pizza } from './pizza.model';

describe('Pizza', () => {
    it('should compile', () => {
        const model: Pizza = {};
        expect(model).toBeTruthy();
    });
});
