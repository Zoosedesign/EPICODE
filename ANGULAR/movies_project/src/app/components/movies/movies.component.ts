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
  favoriteMovies!: Favourites[];
  userId!: number;

  constructor(private moviesSrv: MoviesService, private router: Router) { }

  ngOnInit(): void {
    //recupero utente
    const loggedInUser: User = this.moviesSrv.recuperaUtente();
    if (!loggedInUser) {
      this.router.navigate(['login']); // Redirect to login se non esiste nessun user nel session storage
    } else {
      this.userId = loggedInUser.id;
      this.router.navigate(['movie/popular'], { queryParams: { userId: loggedInUser.id } });
    }

    //recupero film
    this.moviesSrv.get().subscribe((data: Movies[]) => {
      this.movies = data;
    });

    //recupero film preferiti
    this.moviesSrv.getFavorites(this.userId).subscribe((favorites: Favourites[]) => {
      this.favoriteMovies = favorites;
    });
  }

  //metodo like
  toggleLike(userId: number, movieId: number) {
    this.moviesSrv.toggleLike(userId, movieId);
  }

  //resistuirà true se troverà una corrispondenza
  isMovieLiked(movieId: number): boolean {
    return this.favoriteMovies?.some((favorite: Favourites) => favorite.movieId === movieId) ?? false;
  }

  //cambia solo graficamente l'icona per avere un feedback immediato
  toggleIcon(event: Event) {
    const heart = event.target as HTMLElement;
    heart.classList.toggle('bi-suit-heart-fill');
    heart.classList.toggle('bi-suit-heart');
  }
}
