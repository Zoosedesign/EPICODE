import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCompleteComponent } from './components/task-complete/task-complete.component';

const pagine: Route[] = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'complete',
    component: TaskCompleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pagine)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
