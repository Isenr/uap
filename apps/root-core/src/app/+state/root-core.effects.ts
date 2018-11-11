import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { RootCorePartialState } from '@uap/root-core/models';

import { LoadRootCore, RootCoreActionTypes, RootCoreLoaded, RootCoreLoadError } from './actions';

@Injectable()
export class RootCoreEffects {
    @Effect()
    public loadRootCore$ = this.dataPersistence.fetch(RootCoreActionTypes.LoadRootCore, {
        run: (action: LoadRootCore, state: RootCorePartialState) => {
            // Your custom REST 'load' logic goes here. For now just return an empty list...
            return new RootCoreLoaded([]);
        },

        onError: (action: LoadRootCore, error) => {
            console.error('Error', error);
            return new RootCoreLoadError(error);
        },
    });

    // workaround to get DataPersistence to work with NgRx v7.0.0-beta.0
    private get dataPersistence(): DataPersistence<RootCorePartialState> {
        if ((this._dataPersistence.actions as Actions & { ofType: any }).ofType) {
            return this._dataPersistence;
        }
        this._dataPersistence.actions = new Proxy(this._dataPersistence.actions, {
            get(target: Actions<Action>, p: string | number | symbol, receiver: any) {
                if (p !== 'ofType') return target[p];
                return type => target.pipe(ofType(type));
            },
        });
        return this._dataPersistence;
    }

    constructor(
        private actions$: Actions,
        private _dataPersistence: DataPersistence<RootCorePartialState>
    ) {}
}
