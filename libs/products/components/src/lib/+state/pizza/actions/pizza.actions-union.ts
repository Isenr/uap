import { PizzaCreate } from './pizza-create';
import { PizzaRemove } from './pizza-remove';
import { PizzaSelect } from './pizza-select';
import { PizzaUpdate } from './pizza-update';
import { PizzasLoad } from './pizzas-load';
import { PizzasLoadError } from './pizzas-load-error';
import { PizzasLoaded } from './pizzas-loaded';

export type PizzaActionsUnion =
    | PizzaCreate
    | PizzaRemove
    | PizzaSelect
    | PizzaUpdate
    | PizzasLoad
    | PizzasLoadError
    | PizzasLoaded;
