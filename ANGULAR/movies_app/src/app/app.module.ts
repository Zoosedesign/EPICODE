import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MoviesComponent } from './components/movies/movies.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { NavbarComponent } from './components/navbar/navbar.component';
/* import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //MoviesComponent,
    //DashboardComponent,
    //NavbarComponent,
/*     LoginComponent,
    SignupComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
