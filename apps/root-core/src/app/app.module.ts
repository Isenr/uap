import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NxModule } from '@nrwl/nx';
import { authImports, AuthModule } from '@uap/auth';
import { backendImports, backendProviders } from '@uap/backend';
import { stateImports } from '@uap/state';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app/app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        // #region application imports
        AppRoutingModule,

        AuthModule,
        // #endregion application imports

        // #region angular imports
        BrowserModule,

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        // #endregion angular imports

        // #region auth imports
        ...authImports(environment),
        // #endregion auth imports

        // #region backend imports
        ...backendImports(environment),
        // #endregion backend imports

        // #region nrwl imports
        NxModule.forRoot(),
        // #endregion nrwl imports

        // #region state management imports
        ...stateImports(environment),
        // #endregion management imports
    ],
    providers: [...backendProviders()],
})
export class AppModule {}
