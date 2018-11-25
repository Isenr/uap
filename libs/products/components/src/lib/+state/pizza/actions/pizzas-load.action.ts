import { Action } from '@ngrx/store';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzasLoad implements Action {
    public readonly type = PizzaActionTypes.PizzasLoad;
}
