import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  //metto <type> per utilizzare il metodo con diversi oggetti
  loadContent<type>(url: string): Observable<type> {
    return this.http.get<type>(`${url}`)
  }
}
