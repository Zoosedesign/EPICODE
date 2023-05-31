import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule per consentire ad Angular di riconoscere la presenza di un campo di input

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Dichiara l'import di FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
