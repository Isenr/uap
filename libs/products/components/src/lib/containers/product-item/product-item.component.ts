import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza, Topping } from '@uap/products/models';
import { PizzasService, ToppingsService } from '@uap/products/services';

@Component({
    selector: 'uap-product-item',
    styleUrls: ['product-item.component.scss'],
    templateUrl: 'product-item.component.html',
})
export class ProductItemComponent implements OnInit {
    public pizza: Pizza;
    public visualise: Pizza;
    public toppings: Array<Topping>;

    constructor(
        private pizzaService: PizzasService,
        private toppingsService: ToppingsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    public ngOnInit() {
        this.pizzaService.getPizzas().subscribe(pizzas => {
            const param = this.route.snapshot.params.id;
            let pizza;
            if (param === 'new') {
                pizza = {};
            } else {
                pizza = pizzas.find(({ id }) => id === parseInt(param, 10));
            }
            this.pizza = pizza;
            this.toppingsService.getToppings().subscribe(toppings => {
                this.toppings = toppings;
                this.onSelect(toppings.map(topping => topping.id));
            });
        });
    }

    public onSelect(event: Array<number>) {
        let toppings;
        if (this.toppings && this.toppings.length) {
            toppings = event.map(id => this.toppings.find(topping => topping.id === id));
        } else {
            toppings = this.pizza.toppings;
        }
        this.visualise = { ...this.pizza, toppings };
    }

    public onCreate(event: Pizza) {
        this.pizzaService.createPizza(event).subscribe(pizza => {
            this.router.navigate([`/products/${pizza.id}`]);
        });
    }

    public onUpdate(event: Pizza) {
        this.pizzaService.updatePizza(event).subscribe(() => {
            this.router.navigate([`/products`]);
        });
    }

    public onRemove(event: Pizza) {
        const remove = window.confirm('Are you sure?');
        if (remove) {
            this.pizzaService.removePizza(event).subscribe(() => {
                this.router.navigate([`/products`]);
            });
        }
    }
}
