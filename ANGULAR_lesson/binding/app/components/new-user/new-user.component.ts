import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {

    nuovoNome: string = ''; // Nome della variabile che sarà collegata al campo di input presente nell'HTML

    constructor(private userSrv: UsersService) {}

    ngOnInit(): void {}

    onNewUser(nuovoNome: string) { // Metodo che riceve il valore collegato e lo passa al metodo createUser del service
        this.userSrv.createUser(nuovoNome);
    }
}
