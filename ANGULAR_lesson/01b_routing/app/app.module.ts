import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'; // Importazione dell'interfaccia Route e del modulo RouterModule per gestire la navigazione (routing)

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimoComponent } from './components/primo/primo.component';
import { SecondoComponent } from './components/secondo/secondo.component';
import { TerzoComponent } from './components/terzo/terzo.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Route[] = [ // Creazione di una costante basata sull'interfaccia Route che contiene i percorsi di attivazione dei componenti
    {
        path: '', // Percorso che sarà indicato nel link
        component: HomeComponent // Componente che si attiverà al click sul link
    },
    {
        path: 'primo',
        component: PrimoComponent
    },
    {
        path: 'secondo',
        component: SecondoComponent
    },
    {
        path: 'terzo',
        component: TerzoComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PrimoComponent,
        SecondoComponent,
        TerzoComponent,
        HomeComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes) // Dichiarazione di import del modulo RouterModule con il metodo forRoot (per gestire le rotte) che riceve l'array di rotte definito prima
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
