import { Component } from '@angular/core';
import { ProductsFacade } from '@uap/products/state';

@Component({
    selector: 'uap-products',
    styleUrls: ['products.component.scss'],
    templateUrl: 'products.component.html',
})
export class ProductsComponent {
    constructor(public productsFacade: ProductsFacade) {}
}
