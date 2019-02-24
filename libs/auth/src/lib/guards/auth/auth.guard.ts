import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthProvider } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthProvider, private router: Router) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.loggedIn) return true;

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}
