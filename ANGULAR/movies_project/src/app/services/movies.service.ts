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

  url = environment.endpointUrl

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Movies[]>(`${this.url}movies-popular`);
  }
}
