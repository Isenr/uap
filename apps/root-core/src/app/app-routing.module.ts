import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginComponent } from '@uap/auth';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { component: LoginComponent, path: 'login', pathMatch: 'full' },
    {
        canActivate: [AuthGuard],
        loadChildren: '@uap/products/components#ProductsComponentsModule',
        path: 'products',
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule {}
