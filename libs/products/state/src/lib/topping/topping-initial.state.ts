import { ToppingState } from '@uap/products/models';
import { entityListInitialState } from '@uap/state';

import { toppingAdapter } from './topping.adapter';

export const toppingInitialState: ToppingState = {
    ...entityListInitialState(toppingAdapter),
};
