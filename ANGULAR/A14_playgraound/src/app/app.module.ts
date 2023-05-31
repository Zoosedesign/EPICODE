import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Iimporto l'interfaccia necessaria al routing
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostActiveComponent } from './components/post-active/post-active.component';
import { PostInactiveComponent } from './components/post-inactive/post-inactive.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [ // costante creata sull'interfaccia route
    {
        path: '', // Percorso che sarà indicato nel link
        component: HomeComponent // Componente che si attiverà al click sul link
    },
    {
        path: 'active-post',
        component: PostActiveComponent
    },
    {
        path: 'inactive-post',
        component: PostInactiveComponent
    }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostActiveComponent,
    PostInactiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Dichiarazione di import del modulo RouterModul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
