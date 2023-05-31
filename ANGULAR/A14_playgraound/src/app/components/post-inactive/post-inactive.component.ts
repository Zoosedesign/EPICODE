import { Component, OnInit } from '@angular/core';
import { FetchGETService } from 'src/app/services/fetch-get.service';

@Component({
  selector: 'app-post-inactive',
  templateUrl: './post-inactive.component.html',
  styleUrls: ['./post-inactive.component.scss']
})
export class PostInactiveComponent implements OnInit {

  //metto nel costruttore il metodo della fetch importato
  constructor(public fetchGETService: FetchGETService) { }

  ngOnInit(): void {
    //passo solo il link al service/metodo della fetch
    this.fetchGETService.getPost('./assets/json/db.json');
  }
}

