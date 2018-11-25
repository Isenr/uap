import { Action } from '@ngrx/store';

import { ToppingActionTypes } from './topping.action-types';

export class ToppingsLoad implements Action {
    public readonly type = ToppingActionTypes.ToppingsLoad;
}
