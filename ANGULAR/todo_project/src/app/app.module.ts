import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'; // Import necessari per creare il routing
import { FormsModule } from '@angular/forms'; //necessario per usare gli input e i form

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskCompleteComponent } from './components/task-complete/task-complete.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const pagine: Route[] = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'complete',
    component: TaskCompleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TaskCompleteComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pagine),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
