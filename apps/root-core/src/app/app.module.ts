import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { environment } from '../environments/environment';
import { AppComponent } from './containers/app/app.component';

// routes
const ROUTES: Routes = [
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
        StoreModule.forRoot({}),
        environment.production ? [] : StoreDevtoolsModule.instrument(),
    ],
    providers: [],
})
export class AppModule {}
