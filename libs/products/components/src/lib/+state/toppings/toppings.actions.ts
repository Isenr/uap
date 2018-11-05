import { Action } from '@ngrx/store';
import { Topping } from '@uap/products/models';

export enum ToppingsActionTypes {
    LoadToppings = '[ProductsComponents] Load Toppings',
    LoadToppingsError = '[ProductsComponents] Load Toppings Error',
    ToppingsLoaded = '[ProductsComponents] Toppings Loaded',
}

export class LoadToppings implements Action {
    public readonly type = ToppingsActionTypes.LoadToppings;
}

export class ToppingsError implements Action {
    public readonly type = ToppingsActionTypes.LoadToppingsError;
    constructor(public payload: any) {}
}

export class ToppingsLoaded implements Action {
    public readonly type = ToppingsActionTypes.ToppingsLoaded;
    constructor(public payload: Topping[]) {}
}

export type ToppingsAction =
    // prettier-ignore
    LoadToppings
    | ToppingsError
    | ToppingsLoaded;

export const fromToppingsActions = {
    LoadToppings,
    ToppingsError,
    ToppingsLoaded,
};
