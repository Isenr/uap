import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NxModule } from '@nrwl/angular';
import { AuthModule, FirebaseAuthService } from '@uap/auth';
import { FirestoreService } from '@uap/backend';
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
        // #endregion application imports

        // #region angular imports
        BrowserModule,

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        // #endregion angular imports

        // #region angularfire imports
        AngularFireModule.initializeApp(environment.firebase),

        AngularFireAuthModule,

        AngularFirestoreModule.enablePersistence(),
        // #endregion angularfire imports

        // #region auth imports
        AuthModule,
        // #endregion auth imports

        // #region nrwl imports
        NxModule.forRoot(),
        // #endregion nrwl imports

        // #region state management imports
        ...stateImports,
        // #endregion management imports
    ],
    providers: [FirestoreService, FirebaseAuthService, { provide: SETTINGS, useValue: {} }],
})
export class AppModule {}
