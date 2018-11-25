import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from '@uap/state';

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    public serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const {
            url,
            root: { queryParams },
        } = routerState;

        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }

        const { params } = state;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
}
