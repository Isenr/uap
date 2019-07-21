import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, rootReducers } from './reducers';
import { CustomSerializer, RouterEffects } from './router';

const commonImports = [
    // #region ngrx imports
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([RouterEffects]),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
        serializer: CustomSerializer,
    }),
    // #endregion ngrx imports
];

const devImports = [
    ...commonImports,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(rootReducers, { metaReducers: metaReducers({ production: false }), runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument(),
];

const prodImports = [
    ...commonImports,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(rootReducers, { metaReducers: metaReducers({ production: true }), runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
];

export function stateImports({ production }: { production: boolean }) {
    return production ? prodImports : devImports;
}

@NgModule()
export class StateModule {}
