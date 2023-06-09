import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //per prendere l'endpoint di base
import { HttpClient } from '@angular/common/http'; //necessario per usare richieste http

//passo le interfacce
import { Movies } from '../models/movies.interface';
import { Favourites } from '../models/favourites.interface.ts';
//importo l'operatore take per ottenere solo il primo valore emesso
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies!: Movies;
  url = environment.endpointUrl

  constructor(private http: HttpClient, private srvAuth: AuthService) { }

  // ----- OTTIENE L'ARRAY DEI FILM -----
  async getMoviesPop(): Promise<TotMovie[]> {
    const users: AuthData = (await this.srvAuth.users$.pipe(take(1)).toPromise()) as AuthData;
    console.log(users.accessToken);

    // Ottiene l'elenco dei film popolari dal server
    const movies = await this.http.get<Movies[]>(`${this.url}/movie/popular`).toPromise();

    // Ottiene l'elenco dei film preferiti dell'utente corrente dal server
    const favorites = await this.http.get<Favourites[]>(`${this.url}/favorites?userId=${users.user.id}`).toPromise();

    // Combina i film e i preferiti corrispondenti in un unico oggetto TotMovie
    return movies!.map((film) => ({
      data: film,
      favId: favorites!.find((favourites) => favourites.movieId == film.id)?.id,
    }));
  };

   // ----- AGGIUNGE UN FILM AI PREFERITI -----
  async addFav(movieId: number) {
    const users: AuthData = (await this.srvAuth.users$.pipe(take(1)).toPromise()) as AuthData;

    // Effettua una richiesta POST per aggiungere un film ai preferiti dell'utente corrente
    return this.http.post<Favourites>(`${this.url}/favorites`, { userId: users.user.id, movieId });
  };

  // ----- RIMUOVE UN FILM AI PREFERITI -----
  removeFav(id: number) {
    return this.http.delete(`${this.url}/favorites/${id}`);
  };
}
