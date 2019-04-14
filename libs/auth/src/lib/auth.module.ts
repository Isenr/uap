import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components';

export { LoginComponent } from './components';
export { AuthGuard } from './guards';
export { AuthProvider } from './models';
export { FirebaseAuthService } from './services';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule],
})
export class AuthModule {}
