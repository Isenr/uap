import { PRODUCT_FEATURE_KEY_TYPE } from './product-feature-key.type';
import { ProductState } from './product-state.model';

export type ProductPartialState = { [K in PRODUCT_FEATURE_KEY_TYPE]: ProductState };
