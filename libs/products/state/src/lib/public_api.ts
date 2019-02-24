import { PizzaEffects } from './pizza/pizza.effects';
import { ToppingEffects } from './topping/topping.effects';

export { PRODUCT_FEATURE_KEY } from './product/product.feature-key';
export { productReducers } from './product/product.reducer';
export { ProductsFacade } from './product/product.facade';

export const effects = [PizzaEffects, ToppingEffects];
