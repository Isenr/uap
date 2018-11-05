import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '@uap/products/models';
import { merge, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductsFacade } from '../../+state/products.facade';

@Component({
    selector: 'uap-product-item',
    styleUrls: ['product-item.component.scss'],
    templateUrl: 'product-item.component.html',
})
export class ProductItemComponent implements OnInit, OnDestroy {
    public subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public productsFacade: ProductsFacade
    ) {}

    public ngOnInit() {
        this.productsFacade.loadToppings();

        this.subscription = merge(
            this.route.params.pipe(
                tap(({ id }) => {
                    this.productsFacade.selectPizza(id);
                })
            ),
            this.productsFacade.selectedPizza$.pipe(
                tap(pizza => {
                    this.router.navigate([`/products${pizza ? '/' + pizza.id : ''}`]);
                })
            )
        ).subscribe();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public onSelect(event: Array<string | number>) {
        this.productsFacade.selectToppings(event);
    }

    public onCreate(event: Pizza) {
        this.productsFacade.createPizza(event);
    }

    public onUpdate(event: Pizza) {
        this.productsFacade.updatePizza(event);
    }

    public onRemove(event: Pizza) {
        const remove = window.confirm('Are you sure?');
        if (remove) {
            this.productsFacade.removePizza(event);
        }
    }
}
