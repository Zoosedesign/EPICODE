import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router'; //fondamentale per usare la paginazione
import { HttpClientModule } from '@angular/common/http'; //fondamentale per usare ricieste http
import { FormsModule } from '@angular/forms'; //fondamentale per usare i form

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const pagine: Route[] = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(pagine) //gestisco l'array delle pagine
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
