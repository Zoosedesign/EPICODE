import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { TokenInterceptor } from './token.interceptor';

//importa material per login e signup
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
//npm i @angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';


//gestirà auth-module login e signup

const routes: Routes = [
{
  path: "login",
  component: LoginComponent
},
{
  path: "signup",
  component: SignupComponent
}
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //forRoots(routes)
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  // inserire interceptor
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
