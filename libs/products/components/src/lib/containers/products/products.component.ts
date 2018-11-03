import { Component, OnInit } from '@angular/core';
import { Pizza } from '@uap/products/models';
import { PizzasService } from '@uap/products/services';

@Component({
    selector: 'uap-products',
    styleUrls: ['products.component.scss'],
    templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
    public pizzas: Array<Pizza>;

    constructor(private pizzaService: PizzasService) {}

    public ngOnInit() {
        this.pizzaService.getPizzas().subscribe(pizzas => {
            this.pizzas = pizzas;
        });
    }
}
