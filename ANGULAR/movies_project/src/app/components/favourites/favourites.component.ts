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
  favourites!: number[];

  constructor(private moviesSrv: MoviesService, private router: Router) { }

  ngOnInit(): void {
    //recupero utente
    const loggedInUser: User = this.moviesSrv.recuperaUtente();
    if (!loggedInUser) {
      this.router.navigate(['login']); // Redirect to login se non esiste nessun user nel session storage
    } else {
      this.moviesSrv.getFavoritesByUserId(loggedInUser.id).subscribe((userFavorites: Favourites[]) => {
        this.favourites = userFavorites.map((favorite) => favorite.movieId);
      });

      //recupero film
      this.moviesSrv.get().subscribe((data: Movies[]) => {
        // filtro i risultato tramite l'array favourites
        this.movies = data.filter((movie: Movies) => this.favourites.includes(movie.id));
      });

      this.router.navigate(['movie/favourites'], { queryParams: { userId: loggedInUser.id } });
    }
  }

}
