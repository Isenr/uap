import { Action } from '@ngrx/store';
import { Topping } from '@uap/products/models';

import { ToppingActionTypes } from './topping.action-types';

export class ToppingsLoaded implements Action {
    public readonly type = ToppingActionTypes.ToppingsLoaded;
    constructor(public payload: { toppings: Topping[] }) {}
}
