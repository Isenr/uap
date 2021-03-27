import { ProductPartialState } from './product-partial-state';

describe('ProductPartialState', () => {
    it('should compile', () => {
        const model: ProductPartialState = {} as ProductPartialState;
        expect(model).toBeTruthy();
    });
});
