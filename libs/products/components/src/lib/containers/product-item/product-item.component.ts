import { Component } from '@angular/core';
import { Pizza } from '@uap/products/models';
import { ProductsFacade } from '@uap/products/state';

@Component({
    selector: 'uap-product-item',
    styleUrls: ['product-item.component.scss'],
    templateUrl: 'product-item.component.html',
})
export class ProductItemComponent {
    constructor(public productsFacade: ProductsFacade) {}

    public onRemove(event: Pizza) {
        const remove = window.confirm('Are you sure?');
        if (!remove) return;
        this.productsFacade.removePizza(event);
    }
}
