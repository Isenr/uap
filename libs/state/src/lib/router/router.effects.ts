import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { RouterActionsUnion, RouterActionTypes } from './router.actions';

@Injectable()
export class RouterEffects {
    @Effect({ dispatch: false })
    public routerNavigate$ = this.actions.pipe(
        ofType(RouterActionTypes.RouterNavigate),
        tap(({ payload: { commands, extras } }) => {
            this.router.navigate(commands, extras);
        })
    );

    constructor(private actions: Actions<RouterActionsUnion>, private router: Router) {}
}
