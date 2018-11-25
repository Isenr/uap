import { ToppingsLoadError } from './topping-load-error.action';
import { ToppingsLoad } from './topping-load.action';
import { ToppingsLoaded } from './topping-loaded.action';
import { ToppingsSelect } from './topping-select.action';

export type ToppingActionsUnion =
    | ToppingsLoad
    | ToppingsLoadError
    | ToppingsLoaded
    | ToppingsSelect;
