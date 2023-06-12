import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //per prendere l'endpoint di base
import { HttpClient } from '@angular/common/http'; //necessario per usare richieste http

//passo le interfacce
import { Movies } from '../models/movies.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = environment.endpointUrl

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Movies[]>(`${this.url}movies-popular`);
  }

  recuperaUtente(): User {
    const userString: string | null = sessionStorage.getItem('loggedInUser');
    return userString ? JSON.parse(userString) : null;
  }
}
