import { Topping } from './topping.model';

describe('Topping', () => {
    it('should compile', () => {
        const model: Topping = {};
        expect(model).toBeTruthy();
    });
});
