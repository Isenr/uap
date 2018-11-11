import { Action } from '@ngrx/store';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzaRemove implements Action {
    public readonly type = PizzaActionTypes.PizzaRemove;
    constructor(public payload: { id: string }) {}
}
