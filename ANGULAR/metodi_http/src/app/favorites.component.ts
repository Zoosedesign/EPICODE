import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-favorites',
  template: ` <h3>Totale Foto favorite = {{ totFavorites }}</h3> `,
  styles: [],
})
export class FavoritesComponent implements OnInit {
  totFavorites: number = 0;
  constructor(private photosSrv: PhotosService) {}

  ngOnInit(): void {
    // All'ngOnInit (richiamato dopo ogni onChanges) il componente sottoscrive il subject del service, riceve il valore numerico (vedi service a riga 31) e lo usa per valorizzare la propria variabile totFavorites, che viene bindata nel template (riga 6)
    this.photosSrv.favoritesSub.subscribe((count) => {
      this.totFavorites = count
    });
  }
}
