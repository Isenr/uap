import { Component, OnInit } from '@angular/core';

import { ProductsFacade } from '../../+state';

@Component({
    selector: 'uap-products',
    styleUrls: ['products.component.scss'],
    templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
    constructor(public productsFacade: ProductsFacade) {
        this.productsFacade.allPizzas$.subscribe(value => {
            console.log(value);
        });
    }

    public ngOnInit() {
        this.productsFacade.loadPizzas();
    }
}
