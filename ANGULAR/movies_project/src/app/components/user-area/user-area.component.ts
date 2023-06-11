import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void {
    // Svuota il valore del sessionStorage "loggedInUser"
    sessionStorage.removeItem('loggedInUser');

    // Reindirizza l'utente alla pagina di login
    this.router.navigate(['login']);
  }

}
