import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { Favourites } from 'src/app/models/favourites.interface.ts';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies!: Movies[];
  userId!: number;
  //gestore colorazione icona
  isLiked: boolean = false;

  constructor(private moviesSrv: MoviesService, private router: Router) {}

  ngOnInit(): void {
    //recupero utente
    const loggedInUser: User = this.moviesSrv.recuperaUtente();
    if (!loggedInUser) {
      this.router.navigate(['login']); // Redirect to login se non esiste nessun user nel session storage
    } else {
      this.userId = loggedInUser.id;
      this.router.navigate(['movie/popular'], { queryParams: { userId: this.userId } });
    }

    //recupero film
    this.moviesSrv.get().subscribe((data: Movies[]) => {
      this.movies = data;
    });
  }

  //metodo like
  toggleLike(userId: number, movieId: number) {
    this.moviesSrv.getFavoritesByUserId(userId).subscribe(favorites => {
      //filtro ulteriormente grazie al movieId
      const selectedMovie: Favourites | undefined = favorites.find(favorite => favorite.movieId === movieId);
      const objectId: number | null = selectedMovie ? selectedMovie.id : null;

      if (objectId) {
        this.moviesSrv.unlike(objectId).subscribe(() => {
          console.log('Movie unliked!');
        });
      } else {
        this.moviesSrv.likes(userId, movieId).subscribe(() => {
          console.log('Movie liked!');
        });
      }
    });
  }
}
