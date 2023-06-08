import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable, map, shareReplay } from 'rxjs';

import { BreakpointObserver, Breakpoints} from "@angular/cdk/layout"; // npm i @angular/cdk forse serve layoutmodule
//to detect viewport sizes and matches against media queries

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private srvAuth: AuthService, private brkpointObs: BreakpointObserver) { }

  user$ = this.srvAuth.users$;

  /* this.observer.observe('(max-width: 700px)').subscribe(result => {
  console.log(this.result);
  Do something with the result
  }); */

  handset$: Observable<boolean> = this.brkpointObs.observe(Breakpoints.Handset).pipe(map(result => result.matches), shareReplay());
  //give access to the last emitted value on subscription, with shareReplay

  ngOnInit(): void {
  }

  logout() {
    this.srvAuth.logout();
  };

}
