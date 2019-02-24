import { Component } from '@angular/core';

import { AuthProvider } from '../../models/auth-provider.model';

@Component({
    selector: 'uap-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor(public auth: AuthProvider) {}
}
