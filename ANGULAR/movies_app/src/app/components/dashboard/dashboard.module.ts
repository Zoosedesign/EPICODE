import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

//importa moduli per la navbar
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from "@angular/material/toolbar"; // a mano?? :')
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
//ricordati icone
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      //movies and profile lazy-loading
      {
        path: "profile",
        loadChildren: () =>
          import("../profile/profile.module").then((m) => m.ProfileModule) //inserire moduli
      },
      {
        path: "",
        loadChildren: () =>
          import("../movies/movies.module").then((m) => m.MoviesModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //forRoot(routes)
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
