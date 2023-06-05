import { Component } from '@angular/core';
import { Photo } from './models/photo';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  template: `
  <style>
    .ccol{
      margin-bottom: 2rem;
    }
    .card{
      height: 100%;
    }
  </style>
    <div class="container mt-5">
      <app-favorites></app-favorites>
      <div *ngIf="photos; else loading" class="row">
        <div  *ngFor="let photo of photos; let i = index" class="col-6 ccol">
          <div class="card">
            <img [src]="photo.thumbnailUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{photo.title}}</h5>
              <a (click)="onDeletePhoto(photo.id,i)" class="btn btn-danger ">Elimina</a>
              <!-- Al click il button chiama il metodo onFavorite (riga 64) -->
              <a (click)="onFavorite()" class="btn  btn-success ms-4">Mi piace</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ng-template #loading>
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </ng-template>

  `,
  styles: [``],
})
export class AppComponent {
  photos: Photo[] | undefined;
  constructor(private photoSrv: PhotosService) {}

  ngOnInit(): void {
    this.photoSrv.get().subscribe((photos) => {
      this.photos = photos;
      console.log(photos);
    },(err)=>{
      alert(err)
    });
  }

  onDeletePhoto(id:number,index:number){
    this.photoSrv.delete(id).subscribe((ris)=>{
      console.log(ris)
      this.photos?.splice(index,1)
    },err=>{
      alert(err)
    })

  }

  // Il metodo chiama il metodo addFavorite del service
  onFavorite(){
    this.photoSrv.addFavorite()
  }
}
