import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FetchGETService {
  data:Post[] = [];
  constructor() { }
  //tutte le operazioni che facevo normalmente in js diventano dei metodi riutilizzabili
  async getPost(url: string) {
    try {
      const response = await fetch(url);
      this.data = await response.json(); //ritorna i dati utilizzabili presi con la get
      console.log(this.data)
    } catch (error) {
      console.error('Errore durante il recupero dei post:', error);
      throw error;
    }
  }
}
