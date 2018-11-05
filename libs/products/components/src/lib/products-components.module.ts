import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductsEffects } from './+state/products.effects';
import { ProductsFacade } from './+state/products.facade';
import { PRODUCTS_FEATURE_KEY, productsReducer } from './+state/products.reducer';
import { PizzaDisplayComponent } from './components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { ProductsComponent } from './containers/products/products.component';

export { ProductsFacade } from './+state/products.facade';

export const ROUTES: Routes = [
    {
        component: ProductsComponent,
        path: '',
    },
    {
        component: ProductItemComponent,
        path: ':id',
    },
    {
        component: ProductItemComponent,
        path: 'new',
    },
];

@NgModule({
    declarations: [
        PizzaDisplayComponent,
        PizzaFormComponent,
        PizzaItemComponent,
        PizzaToppingsComponent,
        ProductsComponent,
        ProductItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature(PRODUCTS_FEATURE_KEY, productsReducer),
        EffectsModule.forFeature([ProductsEffects]),
    ],
    providers: [ProductsFacade],
})
export class ProductsComponentsModule {}
