import { PRODUCT_FEATURE_KEY_TYPE } from './product-feature-key.type';

describe('PRODUCT_FEATURE_KEY_TYPE', () => {
    it('should compile', () => {
        const model: PRODUCT_FEATURE_KEY_TYPE = 'products';
        expect(model).toBeTruthy();
    });
});
