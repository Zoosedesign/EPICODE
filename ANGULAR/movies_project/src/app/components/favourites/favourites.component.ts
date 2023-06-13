import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

// importo le interface
import { User } from 'src/app/models/user.interface';
import { Movies } from 'src/app/models/movies.interface';
import { Favourites } from 'src/app/models/favourites.interface.ts';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  movies!: Movies[];
  movieIds!: number[];
  userId!: number;
  //gestore colorazione icona
  isLiked: boolean = false;

  constructor(private moviesSrv: MoviesService, private router: Router) { }

  ngOnInit(): void {
    //recupero utente
    const loggedInUser: User = this.moviesSrv.recuperaUtente();
    if (!loggedInUser) {
      this.router.navigate(['login']); // Redirect to login se non esiste nessun user nel session storage
    } else {
      this.userId = loggedInUser.id;
      this.router.navigate(['movie/favourites'], { queryParams: { userId: loggedInUser.id } });

      //recupero tutti i movieId dei film preferiti
      this.moviesSrv.getFavoritesByUserId(loggedInUser.id).subscribe((userFavorites: Favourites[]) => {
        this.movieIds = userFavorites.map((favorite) => favorite.movieId);
      });

      //recupero film
      this.moviesSrv.get().subscribe((data: Movies[]) => {
        // filtro i risultato tramite l'array favourites
        this.movies = data.filter((movie: Movies) => this.movieIds.includes(movie.id));
      });
    }
  }

  //metodo like
  toggleLike(userId: number, movieId: number, event: Event) {
    this.moviesSrv.toggleLike(userId, movieId);
    const targetElement = event.target as HTMLElement;
    const card = targetElement.closest('.col-6') as HTMLElement;
    // nascondo l'elemnto che è più immediato invece di refreshare tutta la pagina
    card.classList.add('d-none');
  }
}
