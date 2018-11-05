import { Action } from '@ngrx/store';
import { Topping } from '@uap/products/models';

export enum ToppingsActionTypes {
    ToppingsLoad = '[ProductsComponents] Toppings Load',
    ToppingsLoadError = '[ProductsComponents] Toppings Load Error',
    ToppingsLoaded = '[ProductsComponents] Toppings Loaded',
    ToppingsSelect = '[ProductsComponents] Toppings Select',
}

export class ToppingsLoad implements Action {
    public readonly type = ToppingsActionTypes.ToppingsLoad;
}

export class ToppingsLoadError implements Action {
    public readonly type = ToppingsActionTypes.ToppingsLoadError;
    constructor(public payload: any) {}
}

export class ToppingsLoaded implements Action {
    public readonly type = ToppingsActionTypes.ToppingsLoaded;
    constructor(public payload: { [K in string | number]: Topping }) {}
}

export class ToppingsSelect implements Action {
    public readonly type = ToppingsActionTypes.ToppingsSelect;
    constructor(public payload?: Array<string | number>) {}
}

export type ToppingsAction =
    // prettier-ignore
    ToppingsLoad
    | ToppingsLoadError
    | ToppingsLoaded
    | ToppingsSelect;

export const fromToppingsActions = {
    ToppingsLoad,
    ToppingsLoadError,
    ToppingsLoaded,
    ToppingsSelect,
};
