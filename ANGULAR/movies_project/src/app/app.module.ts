import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router'; //fondamentale per usare la paginazione

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';

const pagine: Route[] = [
  {
    path: '',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(pagine)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
