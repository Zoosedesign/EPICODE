import { Component } from '@angular/core';
import { Photo } from './models/photo';
import { PhotosService } from './services/photos.service';

//esempio di componente non suddiviso
@Component({
  selector: 'app-root',
  template: `

<!------ COMPONENT STYLE ------->
  <style>
    .ccol{
      margin-bottom: 2rem;
    }
    .card{
      height: 100%;
    }
  </style>

  <!------ HTML COMPONENT ------->
    <main class="container mt-5">
      <app-favorites></app-favorites>
      <!-- se gli arriverà l'array di oggetti passerà a ciclarlo, altrimenti si attiverà il loading template -->
      <section *ngIf="photos; else loading" class="row">
        <!-- creo gli elementi recuperati -->
        <div *ngFor="let photo of photos; let i = index" class="col-6 ccol">
          <article class="card">
            <img [src]="photo.thumbnailUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{photo.title}}</h5>
              <a (click)="onDeletePhoto(photo.id,i)" class="btn btn-danger ">Elimina</a>
              <!-- Al click il button chiama il metodo onFavorite (riga 64) -->
              <a (click)="onFavorite()" class="btn btn-success ms-4">Mi piace</a>
            </div>
          </article>
        </div>
  </section>
  </main>

    <ng-template #loading>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    </ng-template>

  `,
  styles: [``],
})

//------ SCRIPT COMPONENT ------->
export class AppComponent {
  photos: Photo[] | undefined;
  constructor(private photoSrv: PhotosService) { }

  ngOnInit(): void {
    this.photoSrv.get().subscribe((photos) => {
      this.photos = photos;
      console.log(photos);
    }, (err) => {
      alert(err)
    });
  }

  onDeletePhoto(id: number, index: number) {
    this.photoSrv.delete(id).subscribe((ris) => {
      console.log(ris)
      this.photos?.splice(index, 1)
    }, err => {
      alert(err)
    })

  }

  // Il metodo chiama il metodo addFavorite del service
  onFavorite() {
    this.photoSrv.addFavorite()
  }
}
