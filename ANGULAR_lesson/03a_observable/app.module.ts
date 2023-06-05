import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

const rotte: Route[] =  [
    {
        path: 'utente',
        component: UserComponent
    },
    {
        path: 'utenti',
        component: UsersComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        UsersComponent,
        UserComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rotte)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
