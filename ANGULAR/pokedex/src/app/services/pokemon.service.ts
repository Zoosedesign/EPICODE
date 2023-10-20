import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pagination } from '../models/pagination.interface';
import { Pokemons } from '../models/pokemons.interface';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = []

  constructor(private http: HttpClient) { }

  //metto <type> per utilizzare il metodo con diversi oggetti
  loadContent<type>(url: string): Observable<type> {
    return this.http.get<type>(`${url}`)
  }
}
