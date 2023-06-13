import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //per prendere l'endpoint di base
import { HttpClient } from '@angular/common/http'; //necessario per usare richieste http

//passo le interfacce
import { Movies } from '../models/movies.interface';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { Favourites } from '../models/favourites.interface.ts';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = environment.endpointUrl

  constructor(private http: HttpClient) { }

  recuperaUtente(): User {
    const userString: string | null = sessionStorage.getItem('loggedInUser');
    return userString ? JSON.parse(userString) : null;
  }

  get() {
    return this.http.get<Movies[]>(`${this.url}movies-popular`);
  }

  getFavoritesByUserId(userId: number): Observable<Favourites[]> {
    return this.http.get<Favourites[]>(`${this.url}favorites?userId=${userId}`);
  }

  likes(userId: number, movieId: number): Observable<Favourites> {
    const data = {
      userId: Number(userId),
      movieId: Number(movieId)
    };

    return this.http.post<Favourites>(`${this.url}favorites`, data);
  }

  unlike(objectId: number): Observable<Favourites> {
    return this.http.delete<Favourites>(`${this.url}favorites/${objectId}`);
  }

  //-------- METODO GESTIONE FAVORITI --------
  toggleLike(userId: number, movieId: number) {
    this.getFavoritesByUserId(userId).subscribe(favorites => {
      //filtro ulteriormente grazie al movieId
      const selectedMovie: Favourites | undefined = favorites.find(favorite => favorite.movieId === movieId);
      const objectId: number | null = selectedMovie ? selectedMovie.id : null;

      if (objectId) {
        this.unlike(objectId).subscribe(() => {
          console.log('Movie unliked!');
        });
      } else {
        this.likes(userId, movieId).subscribe(() => {
          console.log('Movie liked!');
        });
      }
    });
  }
}
