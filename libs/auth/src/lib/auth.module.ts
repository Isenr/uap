import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Config as NgOidcClientConfig, NgOidcClientModule } from 'ng-oidc-client';

import { LoginComponent } from './components';
import { AuthProvider } from './models';
import { FirebaseAuthService } from './services';

export { LoginComponent } from './components';
export { AuthGuard } from './guards';
export { AuthProvider } from './models';

export function authImports({
    auth,
}: {
    auth: {
        firebase: FirebaseOptions;
        ngOidc: NgOidcClientConfig;
        provider: string;
    };
}) {
    return auth.provider === 'firebase'
        ? [AngularFireAuthModule, AngularFireModule.initializeApp(auth.firebase)]
        : auth.provider === 'ng-oidc'
        ? [NgOidcClientModule.forRoot(auth.ngOidc)]
        : [];
}

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule],
})
export class AuthModule {
    constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
        if (parentModule) {
            throw new Error('AuthModule is already loaded. Import it in the AppModule only');
        }
    }

    public static forRoot({
        auth: { provider },
    }: {
        auth: {
            firebase: FirebaseOptions;
            ngOidc: NgOidcClientConfig;
            provider: string;
        };
    }): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers:
                provider === 'firebase'
                    ? [{ provide: AuthProvider, useExisting: FirebaseAuthService }]
                    : [],
        };
    }
}
