import { Injectable } from '@angular/core';

import { PizzasFacade } from './pizzas/pizzas.facade';
import { ToppingsFacade } from './toppings/toppings.facade';

@Injectable()
export class ProductsFacade {
    public pizzasLoaded$ = this.pizzasFacade.loaded$;

    public toppingsLoaded$ = this.toppingsFacade.loaded$;

    public allPizzas$ = this.pizzasFacade.all$;

    public allToppings$ = this.toppingsFacade.all$;

    public selectedPizzas$ = this.pizzasFacade.selected$;

    public selectedToppings$ = this.toppingsFacade.selected$;

    constructor(private pizzasFacade: PizzasFacade, private toppingsFacade: ToppingsFacade) {}

    public loadAll() {
        this.pizzasFacade.loadAll();
        this.toppingsFacade.loadAll();
    }

    public loadAllPizzas() {
        this.pizzasFacade.loadAll();
    }

    public loadAllToppings() {
        this.toppingsFacade.loadAll();
    }

    public selectPizza(id: string | number) {
        this.pizzasFacade.select(id);
    }
}
