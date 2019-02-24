import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BackendModule } from '@uap/backend';
import { effects, PRODUCT_FEATURE_KEY, productReducers } from '@uap/products/state';
import { ObjectValuePipeModule } from '@uap/utils';

import {
    PizzaDisplayComponent,
    PizzaFormComponent,
    PizzaItemComponent,
    PizzaToppingsComponent,
} from './components';
import { ProductItemComponent, ProductsComponent, ProductsWrapperComponent } from './containers';
import { ProductsComponentsRoutingModule } from './products-components-routing.module';

@NgModule({
    declarations: [
        PizzaDisplayComponent,
        PizzaFormComponent,
        PizzaItemComponent,
        PizzaToppingsComponent,
        ProductsComponent,
        ProductItemComponent,
        ProductsWrapperComponent,
    ],
    imports: [
        // #region application imports
        BackendModule,

        ObjectValuePipeModule,

        ProductsComponentsRoutingModule,
        // #endregion application imports

        // #region angular imports
        CommonModule,

        ReactiveFormsModule,
        // #endregion angular imports

        // #region ngrx imports
        EffectsModule.forFeature([...effects]),

        StoreModule.forFeature(PRODUCT_FEATURE_KEY, productReducers),
        // #endregion ngrx imports
    ],
    providers: [],
})
export class ProductsComponentsModule {}
