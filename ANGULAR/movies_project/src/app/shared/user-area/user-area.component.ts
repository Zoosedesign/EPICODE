import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {
  loggedInUser!: User;

  constructor(private moviesSrv: MoviesService,private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.moviesSrv.recuperaUtente();
  }

  signOut(): void {
    // Svuota il valore del sessionStorage "loggedInUser"
    sessionStorage.removeItem('loggedInUser');

    // Reindirizza l'utente alla pagina di login
    this.router.navigate(['login']);
  }

}
