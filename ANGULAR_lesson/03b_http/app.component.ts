import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Users } from './models/users.interface';
import { UsersService } from './service/users.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'http';

    newUser: {
        first_name: string,
        last_name: string,
        avatar: string
    } = {
        first_name: '',
        last_name: '',
        avatar: ''
    }

    sub! :Subscription;
    users: Users[] = [];

    constructor(private http: HttpClient, private usersSrv: UsersService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.recuperaUtenti();
    }

    recuperaUtenti() {
        this.sub = this.usersSrv.recupera().subscribe((lista) => {
            console.log(lista);
            this.users = lista;
        });
    }

    creaUtente() {
        this.sub = this.usersSrv.nuovoUtente(this.newUser).subscribe((utente) => {
            console.log(utente);
            this.users.push(utente);
        });
    }

    cancellaUtente(id: number) {
        this.sub = this.usersSrv.cancella(id).subscribe(() => {
            this.users = this.users.filter((utente) => utente.id != id);
            console.log(`Utente ${id} cancellato!`);
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
}
