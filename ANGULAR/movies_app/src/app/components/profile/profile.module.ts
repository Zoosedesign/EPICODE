import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent
  }
]


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileModule { }
