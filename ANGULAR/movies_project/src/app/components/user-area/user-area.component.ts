import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {
  loggedInUser!: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userString: string | null = sessionStorage.getItem('loggedInUser');
    this.loggedInUser = userString ? JSON.parse(userString) : null;
  }

  signOut(): void {
    // Svuota il valore del sessionStorage "loggedInUser"
    sessionStorage.removeItem('loggedInUser');

    // Reindirizza l'utente alla pagina di login
    this.router.navigate(['login']);
  }

}
