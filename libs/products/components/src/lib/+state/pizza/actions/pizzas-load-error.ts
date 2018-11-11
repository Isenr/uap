import { Action } from '@ngrx/store';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzasLoadError implements Action {
    public readonly type = PizzaActionTypes.PizzasLoadError;
    constructor(public payload: any) {}
}
