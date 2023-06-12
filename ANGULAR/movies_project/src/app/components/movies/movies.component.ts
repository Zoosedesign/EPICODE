import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies!: Movies[];

  constructor(private moviesSrv: MoviesService, private router: Router) { }

  ngOnInit(): void {
    //recupero utente
    const loggedInUser: User = this.moviesSrv.recuperaUtente();
    if (!loggedInUser) {
      this.router.navigate(['login']); // Redirect to login se non esiste nessun user nel session storage
    } else {
      this.router.navigate(['movie/popular'], { queryParams: { userId: loggedInUser.id } });
    }

    //recupero film
    this.moviesSrv.get().subscribe((data: Movies[]) => {
      this.movies = data;
    });
  }
}
