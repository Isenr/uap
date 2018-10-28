import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NxModule.forRoot(),
        RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ],
    providers: [],
})
export class AppModule {}
