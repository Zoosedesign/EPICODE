import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //per prendere l'endpoint di base

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = environment.endpointUrl

  constructor() { }
}
