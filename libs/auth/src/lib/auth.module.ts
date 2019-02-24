import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginComponent } from './components';
import { AuthProvider } from './models';
import { FirebaseAuthService } from './services';

export { LoginComponent } from './components';
export { AuthGuard } from './guards';
export { AuthProvider } from './models';

export function authImports(environment: { firebase: FirebaseOptions }) {
    // imports firebase/auth needed for auth features,
    return [AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebase)];
}

export function authProviders() {
    return [{ provide: AuthProvider, useExisting: FirebaseAuthService }];
}

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule],
    providers: [authProviders()],
})
export class AuthModule {}
