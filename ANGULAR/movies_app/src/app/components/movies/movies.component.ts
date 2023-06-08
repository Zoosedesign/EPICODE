import { Component, OnInit } from '@angular/core';
import { MoviesService, TotMovie } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private srvMovies: MoviesService) { }

  movies!: TotMovie[];

  async ngOnInit() {
    this.movies = await this.srvMovies.getMoviesPop();
  }

  //aggiungi e rimuovi
  //se id del movie ? allora rimuovi movie fav : oppure aggiungi movie fav
  async addFavMovies(idMovie: number, index: number) {
      const myFavorite = await (await this.srvMovies.addFav(idMovie)).toPromise(); //promise
      // modifica array con favorito
      this.movies[index] = { ...this.movies[index], favId: myFavorite!.id }
  }; //c'è un bug nell'aggiunta dei favorites: alle volte rimane disabilitato (vedi html), ma viene segnato ugualmente tra i favoriti dell'utente
// non più :)

  async removeFavMovie(idMovie: number, index: number) {
      await this.srvMovies.removeFav(idMovie).toPromise();
      this.movies[index] = { ...this.movies[index], favId: undefined }
  };

}
