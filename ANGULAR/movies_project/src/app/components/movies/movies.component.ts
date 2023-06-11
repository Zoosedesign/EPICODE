import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies!: Movies[];

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit(): void {
    this.moviesSrv.get().subscribe((data: Movies[]) => {
      this.movies = data;
    });
  }
}
