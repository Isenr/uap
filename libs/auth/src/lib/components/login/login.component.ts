import { Component } from '@angular/core';

import { FirebaseAuthService } from '../../services';

@Component({
    selector: 'uap-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor(public auth: FirebaseAuthService) {}
}
