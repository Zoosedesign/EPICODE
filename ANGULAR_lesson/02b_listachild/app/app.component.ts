import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'listachild';

    users = [
        {
            nome: 'Mario',
            cognome: 'Rossi',
            studente: true
        },
        {
            nome: 'Anna',
            cognome: 'Verdi',
            studente: false
        },
        {
            nome: 'Maria',
            cognome: 'Neri',
            studente: true
        },
        {
            nome: 'Giovanna',
            cognome: 'Chiari',
            studente: false
        },
        {
            nome: 'Nunzia',
            cognome: 'Scuri',
            studente: true
        }

    ]
}
