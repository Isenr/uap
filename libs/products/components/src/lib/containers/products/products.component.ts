import { Component, OnInit } from '@angular/core';

import { ProductsFacade } from '../../+state/products.facade';

@Component({
    selector: 'uap-products',
    styleUrls: ['products.component.scss'],
    templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
    constructor(public productsFacade: ProductsFacade) {}

    public ngOnInit() {
        this.productsFacade.loadAllPizzas();
    }
}
