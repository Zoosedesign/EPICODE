import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

//dashboard lazy-loading
const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadChildren: () =>
    import ("./components/dashboard/dashboard.module").then( (m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
