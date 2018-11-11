import { PizzaEffects } from './pizza/pizza.effects';
import { ToppingEffects } from './topping/topping.effects';

export { PRODUCT_FEATURE_KEY } from './product.feature-key';
export { productReducers } from './product.reducer';
export { ProductsFacade } from './product.facade';

export const effects = [PizzaEffects, ToppingEffects];
