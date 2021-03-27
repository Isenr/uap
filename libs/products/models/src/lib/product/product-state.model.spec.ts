import { ProductState } from './product-state.model';

describe('ProductState', () => {
    it('should compile', () => {
        const model: ProductState = {} as ProductState;
        expect(model).toBeTruthy();
    });
});
