import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';

const pages:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
    pathMatch: 'full'
  },
  {
    path: '**', //tutte le altre rotte non definite
    component: HomeComponent,
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokedexComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(pages)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
