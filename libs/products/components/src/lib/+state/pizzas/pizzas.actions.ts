import { Action } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

export enum PizzasActionTypes {
    LoadPizzas = '[ProductsComponents] Load Pizzas',
    LoadPizzasError = '[ProductsComponents] Load Pizzas Error',
    PizzasLoaded = '[ProductsComponents] Pizzas Loaded',
    SelectPizza = '[ProductsComponents] Select Pizza',
}

export class LoadPizzas implements Action {
    public readonly type = PizzasActionTypes.LoadPizzas;
}

export class LoadPizzasError implements Action {
    public readonly type = PizzasActionTypes.LoadPizzasError;
    constructor(public payload: any) {}
}

export class PizzasLoaded implements Action {
    public readonly type = PizzasActionTypes.PizzasLoaded;
    constructor(public payload: Pizza[]) {}
}

export class SelectPizza implements Action {
    public readonly type = PizzasActionTypes.SelectPizza;
    constructor(public id: string | number) {}
}

export type PizzasAction =
    // prettier-ignore
    LoadPizzas
    | LoadPizzasError
    | PizzasLoaded
    | SelectPizza;

export const fromPizzasActions = {
    LoadPizzas,
    LoadPizzasError,
    PizzasLoaded,
    SelectPizza,
};
