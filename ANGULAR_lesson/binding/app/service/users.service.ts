// Un service è un elemento di Angular generato per erogare metodi utilizzabili da più component; NON viene dichiarato nell'app.module
import { Injectable } from '@angular/core';
import { User } from './../models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: User[] = [];

    constructor() {}

    createUser(nome: string) {
        this.users.push({nome, stato: 'Occupato'});
        console.log(this.users);
    }

    updateUser(index: number, newStatus: string) {
        this.users[index].stato = newStatus;
    }
}
