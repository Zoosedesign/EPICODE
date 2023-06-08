import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MoviesService, TotMovie } from 'src/app/movies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private srvAuth: AuthService, private srvMovies: MoviesService) { }

  users$ = this.srvAuth.users$;
  favourites!: any;
  movies!: TotMovie[];

  //chiamata
  async ngOnInit() {
    this.movies = await this.srvMovies.getMoviesPop();
  }

}
