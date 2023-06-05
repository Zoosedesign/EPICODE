import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { catchError } from "rxjs/operators";
import { Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {
baseURL = "https://jsonplaceholder.typicode.com"

favoritesSub = new Subject<number>() // Un subject è un tipo aprticolare di Observable che tiene sé stesso in osservazione, può essere sottoscritto come un qualsiasi observable e comunica il proprio valore
favoritesCounter = 0
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Photo[]>(`${this.baseURL}/photos`).pipe(catchError(err =>{
      return throwError(this.getErrorMess(err.status))
    }))
  }

  delete(id:number){
    return this.http.delete(`${this.baseURL}/photos/${id}`).pipe(catchError(err=>{
      return throwError(this.getErrorMess(err.status))
    }))
  }

  // Il metodo addFavorite incrementa la variabile numerica e emette il suo valore come parametro del subject (vedi favorites.component.]ts riga 14)
  addFavorite(){
    this.favoritesCounter ++
    this.favoritesSub.next(this.favoritesCounter)
  }

  private getErrorMess(status:number){
    let mess= ''
    switch (status) {
      case 404:
        mess = 'errore nella chiamata'
        break;

      default:
        mess = 'qualcosa non va controlla la connessione'
        break;
    }
    return mess
  }
}
