import { Component, OnInit } from '@angular/core';
import { FetchGETService } from 'src/app/services/fetch-get.service';

@Component({
  selector: 'app-main-inactive',
  templateUrl: './main-inactive.component.html',
  styleUrls: ['./main-inactive.component.scss']
})
export class MainInactiveComponent implements OnInit {

  //metto nel costruttore il metodo della fetch importato
  constructor(public fetchGETService: FetchGETService) { }

  ngOnInit(): void {
    //passo solo il link al service/metodo della fetch
    this.fetchGETService.getPost('./assets/json/db.json');
  }
}
