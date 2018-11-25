import { PizzaCreate } from './pizza-create.action';
import { PizzaRemove } from './pizza-remove.action';
import { PizzaSelect } from './pizza-select.action';
import { PizzaUpdate } from './pizza-update.action';
import { PizzasLoadError } from './pizzas-load-error.action';
import { PizzasLoad } from './pizzas-load.action';
import { PizzasLoaded } from './pizzas-loaded.action';

export type PizzaActionsUnion =
    | PizzaCreate
    | PizzaRemove
    | PizzaSelect
    | PizzaUpdate
    | PizzasLoad
    | PizzasLoadError
    | PizzasLoaded;
