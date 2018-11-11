import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzaUpdate implements Action {
    public readonly type = PizzaActionTypes.PizzaUpdate;
    constructor(public payload: { pizza: Update<Pizza> }) {}
}
