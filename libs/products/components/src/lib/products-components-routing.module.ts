import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductItemComponent, ProductsComponent, ProductsWrapperComponent } from './containers';
import { ProductComponentsResolver } from './resolvers';

export const ROUTES: Routes = [
    {
        children: [
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
        ],
        component: ProductsWrapperComponent,
        path: '',
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(ROUTES)],
})
export class ProductsComponentsRoutingModule {}
