import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '@uap/products/models';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductsFacade } from '../../+state';

@Component({
    selector: 'uap-product-item',
    styleUrls: ['product-item.component.scss'],
    templateUrl: 'product-item.component.html',
})
export class ProductItemComponent implements OnInit, OnDestroy {
    public subscription: Subscription;

    constructor(private router: Router, public productsFacade: ProductsFacade) {}

    public ngOnInit() {
        this.productsFacade.loadAll();

        this.subscription = this.productsFacade.selectedPizza$
            .pipe(
                tap(pizza => {
                    this.router.navigate([`/products${pizza ? '/' + pizza.id : ''}`]);
                })
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        if (!this.subscription) return;
        this.subscription.unsubscribe();
    }

    public onRemove(event: Pizza) {
        const remove = window.confirm('Are you sure?');
        if (!remove) return;
        this.productsFacade.removePizza(event);
    }
}
