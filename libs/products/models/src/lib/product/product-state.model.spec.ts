import { ProductState } from './product-state.model';

describe('ProductState', () => {
    it('should compile', () => {
        const model: ProductState = {} as any;
        expect(model).toBeTruthy();
    });
});
