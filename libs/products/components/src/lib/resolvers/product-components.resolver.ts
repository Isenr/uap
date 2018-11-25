import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ProductsFacade } from '../+state';

@Injectable()
export class ProductComponentsResolver implements Resolve<void> {
    constructor(public productsFacade: ProductsFacade) {}

    public resolve() {
        this.productsFacade.loadAll();
    }
}
