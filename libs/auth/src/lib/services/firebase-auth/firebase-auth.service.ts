import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';

import { AuthProvider } from '../../models/auth-provider.model';

const {
    auth: { GithubAuthProvider },
} = firebase;

@Injectable({
    providedIn: 'root',
})
export class FirebaseAuthService extends AuthProvider {
    // #region constructors
    constructor(private afAuth: AngularFireAuth, private router: Router) {
        super();

        afAuth.onAuthStateChanged(user => {
            this.user = user;

            if (user) {
                this.router.navigate([this.redirectUrl]);
                return;
            } else {
                this.router.navigate(['/']);
            }
        });
    }
    // #endregion constructors

    // #region instance fields
    private _redirectUrl = '/';

    private user: firebase.User;
    // #endregion instance fields

    // #region private methods
    private async oAuthSignIn(provider: firebase.auth.AuthProvider) {
        return await this.afAuth.signInWithPopup(provider);
    }
    // #endregion private methods

    // #region AuthProvider method implementations
    public get loggedIn() {
        return !!this.user;
    }

    public get redirectUrl() {
        return this._redirectUrl;
    }

    public set redirectUrl(value) {
        if (value === 'login') return;
        this._redirectUrl = value;
    }

    public async signIn() {
        const provider = new GithubAuthProvider();
        await this.oAuthSignIn(provider);
    }

    public signOut() {
        this.afAuth.signOut();
    }
    // #endregion AuthProvider method implementations
}
