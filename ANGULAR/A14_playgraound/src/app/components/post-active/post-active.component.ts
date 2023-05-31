import { Component, OnInit } from '@angular/core';
import { FetchGETService } from 'src/app/services/fetch-get.service';

@Component({
  selector: 'app-post-active',
  templateUrl: './post-active.component.html',
  styleUrls: ['./post-active.component.scss']
})
export class PostActiveComponent implements OnInit {

  //metto nel costruttore il metodo della fetch importato
  constructor(public fetchGETService: FetchGETService) {
    //passo solo il link al service/metodo della fetch
    this.fetchGETService.getPost('./assets/json/db.json');
  }

  ngOnInit(): void {}
}
