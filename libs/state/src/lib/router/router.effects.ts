import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { RouterActionsUnion, RouterActionTypes } from './router.actions';

@Injectable()
export class RouterEffects {
    public routerNavigate$ = createEffect(
        () =>
            this.actions.pipe(
                ofType(RouterActionTypes.RouterNavigate),
                tap(({ payload: { commands, extras } }) => {
                    this.router.navigate(commands, extras);
                })
            ),
        { dispatch: false }
    );

    constructor(private actions: Actions<RouterActionsUnion>, private router: Router) {}
}
