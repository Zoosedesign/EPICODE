import { Component } from '@angular/core';
import { UsersService } from './service/users.service'; // Importazione del service users

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'binding';
    users = this.userSrv.users; // Utilizza l'array presente nel service users, importato, per passarlo al componente users

    constructor(private userSrv: UsersService) {}

}
