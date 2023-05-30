import { Component, OnInit } from '@angular/core';
import { FetchGETService } from 'src/app/services/fetch-get.service';

@Component({
  selector: 'app-main-active',
  templateUrl: './main-active.component.html',
  styleUrls: ['./main-active.component.scss']
})
export class MainActiveComponent implements OnInit {

  //metto nel costruttore il metodo della fetch importato
  constructor(public fetchGETService: FetchGETService) { }

  ngOnInit(): void {
    //passo solo il link al service/metodo della fetch
    this.fetchGETService.getPost('./assets/json/db.json');
  }
}
