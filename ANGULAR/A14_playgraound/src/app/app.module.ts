import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Iimporto l'interfaccia necessaria al routing
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainActiveComponent } from './components/main-active/main-active.component';
import { MainInactiveComponent } from './components/main-inactive/main-inactive.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [ // costante creata sull'interfaccia route
    {
        path: '', // Percorso che sarà indicato nel link
        component: MainComponent // Componente che si attiverà al click sul link
    },
    {
        path: 'active-post',
        component: MainActiveComponent
    },
    {
        path: 'inactive-post',
        component: MainInactiveComponent
    }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainActiveComponent,
    MainInactiveComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Dichiarazione di import del modulo RouterModul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
