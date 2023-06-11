import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentPath: string;

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }

  ngOnInit(): void {
  }

}
