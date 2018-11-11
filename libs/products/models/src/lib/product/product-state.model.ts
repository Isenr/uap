import { PizzaState } from '../pizza/pizza-state.model';
import { ToppingState } from '../topping/topping-state.model';

export interface ProductState {
    pizzas: PizzaState;
    toppings: ToppingState;
}
