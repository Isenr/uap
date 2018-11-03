import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import { AppComponent } from './containers/app/app.component';

export const metaReducers: Array<MetaReducer<any>> = !environment.production ? [storeFreeze] : [];

// routes
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    {
        loadChildren: '@uap/products/components#ProductsComponentsModule',
        path: 'products',
    },
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        EffectsModule.forRoot([]),
        NxModule.forRoot(),
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot({}, { metaReducers }),
        environment.production ? [] : StoreDevtoolsModule.instrument(),
    ],
    providers: [],
})
export class AppModule {}
