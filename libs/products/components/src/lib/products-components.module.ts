import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ObjectValuePipe } from '@uap/utils';

import {
    effects,
    PRODUCT_FEATURE_KEY,
    productInitialState,
    productReducers,
    ProductsFacade,
} from './+state';
import {
    PizzaDisplayComponent,
    PizzaFormComponent,
    PizzaItemComponent,
    PizzaToppingsComponent,
} from './components';
import { ProductItemComponent, ProductsComponent } from './containers';
import { ProductComponentsResolver } from './resolvers';

export const ROUTES: Routes = [
    {
        component: ProductsComponent,
        path: '',
        resolve: { data: ProductComponentsResolver },
    },
    {
        component: ProductItemComponent,
        path: 'new',
        resolve: { data: ProductComponentsResolver },
    },
    {
        component: ProductItemComponent,
        path: ':pizzaId',
        resolve: { data: ProductComponentsResolver },
    },
];

@NgModule({
    declarations: [
        ObjectValuePipe,
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
        StoreModule.forFeature(PRODUCT_FEATURE_KEY, productReducers, {
            initialState: productInitialState,
        }),
        EffectsModule.forFeature([...effects]),
    ],
    providers: [ProductComponentsResolver, ProductsFacade],
})
export class ProductsComponentsModule {}
